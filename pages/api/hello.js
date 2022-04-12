// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = {
    footer: [
      {
        copyright: ' FEER McQUEEN 2022 all',
        email: 'EMAIL US ON',
        visit: 'VISIT US AT',
        description: 'Beirut Head Office Jeita, Lebanon, Sector 1, Street 6',
        description2:
          'Doha Office: Doha, Qatar, Aspire Zone, Sport Accelerator, Office No. S27, 2nd Floor',
        call: 'CALL US ON',
        phoneNumber: '+961 9 232 780',
        phoneNumber2: '+961 9 232 893',
        phoneNumber3: '+974 5522 9762',
        phoneNumber4: '+974 4008 3157',
      },
    ],
    text: [
      {
        title: 'The quick brown fox.',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eos repudiandae aut sit, et quae distinctio odit beatae soluta! Veniam, veritatis.',
      },
    ],
    button: [
      {
        name: 'contact us',
      },
    ],
    answer: [
      {
        title: 'Answers',
        description:
          'Dive Into Bright Lab The Digital Realm All About UI/UX Our Services',
      },
    ],
    questionSection: [
      {
        title: ' dive into bright lab',
        number: 1,
        question: 'what kind of solutions does brightlab offer ?',
      },
      {
        number: 1,
        question: 'what kind of solutions does brightlab offer ?',
      },
    ],
    work: [
      {
        title: 'virtual reality | november 2021',
        description: 'now - mobile app',
        learnMoreUrl: 'LEARN MORE',
      },
    ],
    workInsidePage: [
      {
        title: 'the problem',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremquevoluptate saepe tempora hic labore. Ea laudantium reiciendisvoluptas assumenda laborum harum nisi dolores aspernatur, quasidistinctio sed autem ipsam aperiam.',
      },
    ],
    whatWeDid: [
      {
        title: 'what we did',
        subTitle1: 'Ux Design',
        subTitle2: 'Usability Improvements',
        subTitle3: 'Web Development',
        subTitle4: 'Front-end',
        subTitle5: 'Back-end',
      },
    ],
  };

  res.status(200).json(data);
}
