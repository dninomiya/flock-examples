import classNames from 'classnames';
import 'cropperjs/dist/cropper.css';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Cropper, ReactCropperElement } from 'react-cropper';

const Crop = () => {
  const [preview, setPreview] = useState<string>();
  const [targetImage, setTargetImage] = useState<string | null>(
    '/images/crop-placeholder.jpg'
  );
  const cropperRef = useRef<ReactCropperElement>(null);
  const zoomSliderRef = useRef<HTMLInputElement>(null);
  const [minZoom, setMinZoom] = useState<number>();

  const setDefaultZoom = (event: Cropper.ReadyEvent<HTMLImageElement>) => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const canvasData = cropper.getCanvasData();
      const zoomRatio = canvasData.width / canvasData.naturalWidth;
      setMinZoom(zoomRatio);

      if (zoomSliderRef.current) {
        zoomSliderRef.current.value = zoomRatio.toFixed(4);
      }
    }
  };

  const crop = () => {
    const imageDataURL = cropperRef.current?.cropper
      .getCroppedCanvas({
        width: 400,
        height: 400,
      })
      .toDataURL();
    setPreview(imageDataURL as string);
  };

  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = () => {
      setTargetImage(reader.result as string);
    };

    const file = event.currentTarget.files?.[0];

    if (file) {
      reader.readAsDataURL(file);
      event.currentTarget.value = '';
    }
  };

  const changeZoom = (event: ChangeEvent<HTMLInputElement>) => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      cropper.zoomTo(Number(event.currentTarget.value));
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden">
      <div className="flex flex-col h-72 lg:h-auto bg-black/60">
        <div className="py-3 px-2">
          <input
            className="text-sm"
            type="file"
            accept="image/png,image/jpeg"
            onChange={setImage}
          />
        </div>
        <div className="flex-1 relative">
          {targetImage && (
            <Cropper
              src={targetImage}
              ready={setDefaultZoom}
              className="absolute inset-0"
              initialAspectRatio={1 / 1}
              aspectRatio={1 / 1}
              dragMode="move"
              guides={false}
              ref={cropperRef}
              cropBoxMovable={false}
              cropBoxResizable={false}
              toggleDragModeOnDblclick={false}
              center={false}
              background={false}
              viewMode={1}
              autoCropArea={1}
              zoomOnWheel={false}
            />
          )}
        </div>
        {targetImage && (
          <div className="flex items-center space-x-4 p-2 bg-black">
            <input
              className="flex-1 min-w-0"
              type="range"
              min={minZoom}
              max={(minZoom || 0) + 1}
              step={0.0001}
              ref={zoomSliderRef}
              onChange={changeZoom}
            />
            <span className="lg:flex-1"></span>
            <button
              className="opacity-60 text-sm whitespace-nowrap"
              onClick={() => {
                setTargetImage(null);
                setPreview(undefined);
              }}
            >
              リセット
            </button>
            <button
              className="text-sm p-2 rounded bg-pink-600 text-white whitespace-nowrap"
              onClick={crop}
            >
              切り抜く
            </button>
          </div>
        )}
      </div>
      <div className="bg-slate-900 p-4 lg:p-10">
        <div
          className={classNames(
            'mx-auto lg:w-80 border-dashed overflow-hidden aspect-square rounded-md border-slate-700',
            preview ? 'shadow' : 'border-2 bg-slate-800/10'
          )}
        >
          {preview && <img src={preview} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Crop;
