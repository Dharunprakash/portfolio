import styles from '../styles/ContactCode.module.css';

const contactItems = [
 
  {
    social: 'email',
    link: 'dharunpraksh.m1504@gmail.com',
    href: 'mailtodharunpraksh.m1504@gmail.com',
  },
  {
    social: 'github',
    link: 'itsdharun',
    href: 'https://https://github.com/Dharunprakash',
  },
  {
    social: 'linkedin',
    link: 'dharunprakash',
    href: 'https://www.linkedin.com/in/dharun-prakash-m/',
  },
  {
    social: 'leetcode',
    link: 'Dharun_prakash',
    href: 'https://leetcode.com/Dharun_prakash/',
  }
  , 
  {
    social: 'GeeksForGeeks',
    link: 'dharunprakash',
    href: 'https://www.geeksforgeeks.org/user/dharunprakash/',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
