import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { HiPhotograph } from 'react-icons/hi';

const Dropzone = () => {
  const [preview, setPreview] = useState<string>();

  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0] as File;
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      setPreview(reader.result as string);
    });

    reader.readAsDataURL(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      onDropAccepted,
      accept: {
        'image/jpeg': [],
        'image/png': [],
      },
    });

  const isActive = isDragActive && isDragAccept;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div
        {...getRootProps()}
        className={classNames(
          'rounded-md border-dashed border-2 border-gray-500 flex transition-colors items-center justify-center aspect-square',
          isActive && 'border-pink-600'
        )}
      >
        <input {...getInputProps()} />
        <div>
          <HiPhotograph
            size={80}
            className={classNames(
              'mx-auto mb-2',
              isActive ? 'text-pink-600' : 'opacity-40'
            )}
          />
          <p className={isActive ? 'text-pink-600' : 'opacity-60'}>
            {isActive ? 'はなしてください' : '画像をドロップしてください'}
          </p>
        </div>
      </div>
      <div>{preview && <img src={preview} alt="" />}</div>
    </div>
  );
};

export default Dropzone;
