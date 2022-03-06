import {
  AutocompleteState,
  createAutocomplete,
} from '@algolia/autocomplete-core';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useMemo, useRef, useState } from 'react';
import { searchClient } from '../algolia/client';
import { Post } from '../types/post';

const SearchAutocomplete = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [autocompleteState, setAutocompleteState] =
    useState<AutocompleteState<Post>>();
  const autocomplete = useMemo(
    () =>
      createAutocomplete<Post>({
        id: 'autocomplete-search',
        openOnFocus: true,
        onStateChange({ state }) {
          setAutocompleteState(state);
        },
        onSubmit(params) {
          alert(`実際には「${params.state.query}」の検索結果画面に遷移します`);
        },
        getSources() {
          return [
            {
              sourceId: 'posts',
              getItemInputValue({ item }) {
                return item.title;
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: 'posts',
                      query,
                      params: {
                        hitsPerPage: 4,
                      },
                    },
                  ],
                });
              },
              getItemUrl({ item }) {
                return `/${router.query.id}?postId=${item.id}`;
              },
              onSelect(params) {
                router.replace(params.itemUrl as string, undefined, {
                  shallow: true,
                });
              },
            },
          ];
        },
        navigator: {
          navigate({ itemUrl }) {
            router.push(itemUrl);
          },
        },
      }),
    []
  );

  return (
    <div {...autocomplete.getRootProps({})}>
      <form
        {...(autocomplete.getFormProps({
          inputElement: inputRef.current,
        }) as any)}
      >
        <input
          {...(autocomplete.getInputProps({
            inputElement: inputRef.current,
          }) as any)}
          id="search-field"
          className="block w-full bg-transparent rounded border mb-2"
          placeholder="投稿を検索"
          autoComplete="off"
          ref={inputRef}
          type="text"
        />

        <div {...(autocomplete.getPanelProps({}) as any)}>
          {autocompleteState?.isOpen &&
            autocompleteState?.collections.map((collection, index) => {
              const { source, items } = collection;

              return (
                <div
                  className="rounded overflow-hidden dark:bg-slate-800 bg-white shadow w-full"
                  key={`source-${index}`}
                >
                  {items.length > 0 && (
                    <ul {...autocomplete.getListProps()}>
                      {items.map((item, index) => (
                        <li key={item.title}>
                          <a
                            {...(autocomplete.getItemProps({
                              item,
                              source,
                            }) as any)}
                            className={classNames(
                              'block py-2 pl-3 text-sm',
                              autocompleteState?.activeItemId === index &&
                                'text-white bg-indigo-600'
                            )}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
        </div>
      </form>
    </div>
  );
};

export default SearchAutocomplete;
