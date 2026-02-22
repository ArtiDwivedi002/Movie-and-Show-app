import { Fragment } from 'react';
import style from '@/components/Footer/footer.module.scss';
import Image from 'next/image';
import { ImagesConstants } from '@/constants/imagesConstants';
import { useTranslations } from 'next-intl';
import { TRANSLATIONCONSTANTSMOVIE } from '@/constants/translationConstants';
export default function Footer() {
    const footerTitleTrans=useTranslations(TRANSLATIONCONSTANTSMOVIE.FOOTERTITLE);
    const footerDataTrans=useTranslations(TRANSLATIONCONSTANTSMOVIE.FOOTERDATA);
 const footerData = [
  {
    title:footerTitleTrans(TRANSLATIONCONSTANTSMOVIE.BASICTITLE),
    data: [
      { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.ABOUT)},
      { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.CONTACT) },
      { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.APIDOCUMENTATION) },
      {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           name:footerDataTrans(TRANSLATIONCONSTANTSMOVIE.SYSTEMSTATUS)}
    ],
  },
  {
    title: footerTitleTrans(TRANSLATIONCONSTANTSMOVIE.GETINVOLVEDTITLE),
    data: [
      { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.CONTRIBUTE) },
      { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.ADDNEWMOVIE) },
      { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.RECOMMENDATION)},
      {name:footerDataTrans(TRANSLATIONCONSTANTSMOVIE.BUSINESS)}
    ],
  },
  {
    title: footerTitleTrans(TRANSLATIONCONSTANTSMOVIE.COMMUNITYTITLE),
    data: [
      { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.LEADERBOARD) },
      { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.SUPPORTSFORUM) },
      { name:  footerDataTrans(TRANSLATIONCONSTANTSMOVIE.DISCUSSION) },
      { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.SUPPORTSFORUM)},
    ],
  },
  {
    title: footerTitleTrans(TRANSLATIONCONSTANTSMOVIE.LEGALTITLE),
    data: [ { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.TERMOFUSE), },
         { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.APITERMOFUSE) },
      { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.PRIVACYPOLICY) },
      { name: footerDataTrans(TRANSLATIONCONSTANTSMOVIE.DMCAPOLICY) },
    ],
  },
];

    return (
        <Fragment>
            <footer className={style["container-footer"]}>
                <div>
                    <Image src={ImagesConstants.footerlogo} width={120} height={120} alt='App logo' /><br/>
                    <button className={style["btn"]}>{footerDataTrans(TRANSLATIONCONSTANTSMOVIE.HIUSER)}</button>
                </div>
                {footerData.map((section) => (
                    <div key={section.title}>
                        <h2>{section.title}</h2>
                        {
                            section.data.map((val,index)=>(
                                <div key={index}>
                                   <p>{val.name}</p> 
                                </div>
                            ))
                        }
        
                    </div>
                ))}
            </footer>
        </Fragment>
    );
}
