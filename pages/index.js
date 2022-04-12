import cn from 'classnames';
import Footer from '../components/Footer';
import axios from 'axios';
import { BrightLabSvgrBlue } from '../svgr/BrightLabSvgrBlue';
import Button from '../components/Button';
import TitleDesc from '../components/TitleDesc';
import CicularServices from '../components/CicularServices';
import MobileAppSvgr from '../svgr/MobileAppSvgr';
import Answers from '../components/Answers';
import Questions from '../components/Questions';
import WorkProjects from '../components/WorkProjects';
import RightLeftText from '../components/RightLeftText';
import LeftRightText from '../components/LeftRightText';
import WhatWeDid from '../components/WhatWeDid';

export default function Home(props) {
  return (
    <div>
      {/* {props.footer.map((item, idx) => (
        <Footer
          copyright={item.copyright}
          email={item.email}
          visit={item.visit}
          description={item.description}
          description2={item.description2}
          call={item.call}
          phoneNumber={item.phoneNumber}
          phoneNumber2={item.phoneNumber2}
          phoneNumber3={item.phoneNumber3}
          phoneNumber4={item.phoneNumber4}
        />
      ))} */}

      {props.footer.map((item, idx) => (
        <Footer
          copyright={item.copyright}
          email={item.email}
          visit={item.visit}
          description={item.description}
          description2={item.description2}
          call={item.call}
          phoneNumber={item.phoneNumber}
          phoneNumber2={item.phoneNumber2}
          phoneNumber3={item.phoneNumber3}
          phoneNumber4={item.phoneNumber4}
        />
      ))}

      <div>
        <BrightLabSvgrBlue />

        {props.button.map((item, idx) => (
          <Button
            className={cn('border w-2/12 p-1 flex justify-center items-center')}
            key={idx}
            name={item.name}
          />
        ))}

        {props.text.map((item, idx) => (
          <TitleDesc
            key={idx}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <CicularServices />

      {props.answer.map((item, idx) => (
        <Answers key={idx} title={item.title} description={item.description} />
      ))}

      {props.questionSection.map((item, idx) => (
        <Questions
          key={idx}
          title={item.title}
          number={item.number}
          question={item.question}
        />
      ))}

      {props.work.map((item, idx) => (
        <WorkProjects
          key={idx}
          title={item.title}
          description={item.description}
          learnMoreUrl={item.learnMoreUrl}
        />
      ))}

      {props.workInsidePage.map((item, idx) => (
        <RightLeftText
          key={idx}
          title={item.title}
          description={item.description}
        />
      ))}

      {props.workInsidePage.map((item, idx) => (
        <LeftRightText
          key={idx}
          title={item.title}
          description={item.description}
        />
      ))}

      {props.whatWeDid.map((item, idx) => (
        <WhatWeDid
          key={idx}
          title={item.title}
          subTitle1={item.subTitle1}
          subTitle2={item.subTitle2}
          subTitle3={item.subTitle3}
          subTitle4={item.subTitle4}
          subTitle5={item.subTitle5}
        />
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get('http://localhost:3000/api/hello');

  return {
    props: {
      footer: response.data.footer,
      text: response.data.text,
      button: response.data.button,
      answer: response.data.answer,
      questionSection: response.data.questionSection,
      work: response.data.work,
      workInsidePage: response.data.workInsidePage,
      whatWeDid: response.data.whatWeDid,
    }, // will be passed to the page component as props
  };
}
