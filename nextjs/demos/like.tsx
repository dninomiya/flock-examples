import { doc, getDoc, runTransaction } from 'firebase/firestore';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { useDebouncedCallback } from 'use-debounce';
import useSWR from 'swr';
import { db } from '../firebase/client';
import { Post } from '../types/post';

type Props = {
  userId: string;
  postId: string;
};

const Like = ({
  userId = 'MOCK_USER_ID',
  postId = '5BlpSpkJhCcVnsi9NuW4',
}: Props) => {
  const postRef = doc(db, `posts/${postId}`);

  const postSWR = useSWR<Post>(`posts/${postId}`, async () => {
    const snap = await getDoc(postRef);
    return snap.data() as Post;
  });

  const likeRef = doc(db, `posts/${postId}/likes/${userId}`);

  const isLikeSWR = useSWR<boolean>(
    `posts/${postId}/likes/${userId}`,
    async () => {
      const snap = await getDoc(likeRef);
      return snap.exists();
    }
  );

  const isLike = isLikeSWR.data;
  const oldData = postSWR.data;

  const toggleLike = useDebouncedCallback(async () => {
    if (isLike === undefined || !oldData) {
      return null;
    }

    postSWR.mutate(
      {
        ...oldData,
        likeCount: oldData.likeCount + (isLike ? -1 : 1),
      },
      {
        revalidate: false,
      }
    );

    isLikeSWR.mutate(!isLike, {
      revalidate: false,
    });

    runTransaction(db, async (transaction) => {
      const likeDoc = await transaction.get(likeRef);
      const postData = (await transaction.get(postRef)).data() as Post;

      if (likeDoc.exists()) {
        transaction.delete(likeRef);
      } else {
        transaction.set(likeRef, {
          userId,
        });
      }

      const oldLikeCount = postData.likeCount || 0;

      return transaction.update(postRef, {
        likeCount: oldLikeCount + (likeDoc.exists() ? -1 : 1),
      });
    });
  }, 500);

  return (
    <div>
      <button
        className="inline-flex space-x-2 items-center"
        onClick={toggleLike}
      >
        {isLike ? (
          <HiHeart className="text-pink-500" size={20} />
        ) : (
          <HiOutlineHeart className="text-gray-500" size={20} />
        )}
        <span>いいね</span>
        <span>{postSWR.data?.likeCount}</span>
      </button>
    </div>
  );
};

export default Like;
