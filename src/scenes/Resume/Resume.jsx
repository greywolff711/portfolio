import s from './Resume.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import avatar from '../../assets/resume-files.svg';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import { useEffect, useRef, useState } from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import Button from '../../components/UIElements/Button/Button';
//react-pdf
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink =
  'https://raw.githubusercontent.com/greywolff711/greywolff711/main/Harshit%20Resume.pdf';

const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);
  useEffect(() => {
    setPdfPageWidth(
      pdfWrapper.current.getBoundingClientRect().width || null,
    );
  }, []);

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <b>Resume</b>
          </h1>

          <div className={s.filesImg}>
            <LazyLoadImage alt="avatar" effect="blur" height={400} src={avatar} />
          </div>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>

        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            loading={<LinerProgress />}
            file={{
              url: resumeLink,
            }}
          >
            <Page
              loading={<LinerProgress />}
              width={pdfPageWidth}
              pageNumber={1}
            />
          </Document>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
