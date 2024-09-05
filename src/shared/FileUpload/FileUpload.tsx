import { ChangeEvent, ComponentProps, ReactNode, useState } from 'react';
import styles from './FileUpload.module.css';
import { useImgFile } from './store';
import clsx from 'clsx';

type FileUploadVariants = 'avatar' | 'default';

interface FileUploadProps extends ComponentProps<'div'> {
  children?: ReactNode;
  variant: FileUploadVariants;
  setFile?: (file: File) => void;
  setUrl?: (url: string) => void;
}
export const FileUpload = ({ children, variant, className, setFile, setUrl }: FileUploadProps) => {
  const [fileImg, setFileImg] = useState<File | null>(null);
  const setImgUrl = useImgFile((state) => state.setUrl);
  const setImgFile = useImgFile((state) => state.setFile);

  const text = children ? children : 'загрузите файл';

  //   useEffect(() => {
  //     const url = fileImg && URL.createObjectURL(fileImg);
  //     setUrl(url);
  //   }, [fileImg]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      const url = file && URL.createObjectURL(file);
      setUrl ? setUrl(url) : setImgUrl(url);
      setFileImg(file);
      setFile ? setFile(file) : setImgFile(file);
    }
  };

  return (
    <div className={className}>
      <input
        className={clsx(styles.input, styles[variant])}
        type='file'
        name='file'
        id='file'
        data-multiple-caption='{count} файлов выбрано'
        multiple
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor='file'>
        <span>{fileImg ? fileImg?.name : text}</span>
      </label>
    </div>
  );
};
