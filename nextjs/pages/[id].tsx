import * as fs from 'fs';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { NextSeo } from 'next-seo';
import ogs from 'open-graph-scraper';
import * as path from 'path';
import React from 'react';
import { HiPencil } from 'react-icons/hi';
import Explanation from '../components/explanation';
import GuideDemoAndSourceViewer from '../components/guide/demo-and-source-viewer';
import GuideHeader from '../components/guide/header';
import GuideHeading from '../components/guide/heading';
import GuideLinkList from '../components/guide/link-list';
import { Features } from '../lib/features';
import { Site } from '../lib/site';
import { Guide } from '../types/guide';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Example = ({
  sources,
  explanation,
  demoExists,
  docLinks,
  guide,
}: Props) => {
  const getEditLink = () => {
    if (process.env.NODE_ENV === 'development') {
      return `vscode://file/${process.env.NEXT_PUBLIC_PROJECT_PATH}/docs/${guide.id}.md`;
    } else {
      return `https://github.com/flock-team/flock-examples/edit/main/nextjs/docs/${guide.id}.md`;
    }
  };

  return (
    <div className="container">
      <NextSeo
        title={guide.title}
        openGraph={{
          images: [
            {
              url: `${Site.origin}/images/${guide.id}.png`,
            },
          ],
        }}
      />
      <GuideHeader guide={guide} />

      {(demoExists || Boolean(guide.sources?.length)) && (
        <GuideDemoAndSourceViewer {...{ sources, demoExists, guide }} />
      )}

      <div className="space-y-10">
        {explanation && (
          <section>
            <GuideHeading>
              <span className="flex items-center space-x-2">
                <span>解説</span>
                <a href={getEditLink()} className="opacity-60">
                  <HiPencil />
                </a>
              </span>
            </GuideHeading>
            <Explanation markdown={explanation} />
          </section>
        )}

        <section>
          <GuideHeading>使用ライブラリ</GuideHeading>
          <GuideLinkList items={guide.libraries} />
        </section>

        <section>
          <GuideHeading>参考サイト</GuideHeading>
          <GuideLinkList items={docLinks} />
        </section>
      </div>
    </div>
  );
};

export default Example;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Features.filter((feature) => Boolean(feature.sources)).map(
      (feature) => {
        return { params: { id: feature.id } };
      }
    ),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const guide = Features.find(
    (item) => item.id === context.params?.id
  ) as Guide;
  const sources = guide?.sources?.map((fileName) => {
    const jsonPath = path.join(process.cwd(), fileName);
    return {
      fileName,
      source: fs.readFileSync(jsonPath, 'utf-8')?.replace(/\n$/, ''),
    };
  });

  let explanation: string;
  try {
    const explanationFilePath = path.join(
      process.cwd(),
      `docs/${context.params?.id}.md`
    );
    explanation = fs.readFileSync(explanationFilePath, 'utf-8');
  } catch {
    explanation = '';
  }

  let demoExists: boolean;
  try {
    const demoPath = path.join(
      process.cwd(),
      `demos/${context.params?.id}.tsx`
    );
    fs.readFileSync(demoPath, 'utf-8');
    demoExists = true;
  } catch {
    demoExists = false;
  }

  const docRequests = guide?.docs?.map(async (item) => {
    const { result } = await ogs({
      url: item.url,
      headers: {
        'Accept-Language': 'ja',
      },
    });
    if (result.success) {
      return {
        title: result.ogTitle,
        url: item.url,
      };
    } else {
      return undefined;
    }
  });

  const docLinks: {
    title: string;
    url: string;
  }[] = docRequests
    ? ((await Promise.all(docRequests)).filter(Boolean) as {
        title: string;
        url: string;
      }[])
    : [];

  return {
    props: {
      sources: sources || [],
      explanation,
      docLinks,
      demoExists,
      guide,
    },
  };
};
