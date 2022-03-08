import { NextApiRequest, NextApiResponse } from 'next';
import sgMail, { MailDataRequired } from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { to, name } = req.body;

  const msg: MailDataRequired = {
    to,
    from: 'noreply@examples.flock.codes',
    templateId: 'd-8e8f3324d8e5447da069bef4284d1b50',
    dynamicTemplateData: {
      name,
    },
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('メール送信に成功しました。');
  } catch (error) {
    res.status(500).send('メール送信に失敗しました。');
  }
};

export default handler;
