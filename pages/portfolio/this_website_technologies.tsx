import { useEffect } from 'react'

import { pageIds } from '../../components/navbar'

import styles from '../../styles/About.module.scss'
import styles2 from '../../styles/MobileShowPage.module.scss'
import navlinkStyles from '../../styles/Navbar.module.scss'


const ThisWebsiteTechnologies = () => {
  const technologiesUsedString = () => {
    return Array.from('Technologies Used for This Website').map((chr, i) => (
      chr === ' ' ?
      ' '  :
      <span key={i}>{chr}</span>
    ))
  }

  // colorize heading
  useEffect(() => {
    const headingToColorize = document.querySelectorAll('.colorizedHeading span')

    let index = Math.floor(Math.random() * (headingToColorize.length))

    for (let i = 0; i < 2; i++) {
      while (Array.from(headingToColorize[index].classList).includes(styles.headingSpanSkyBlue) || Array.from(headingToColorize[index].classList).includes(styles.headingSpanBeige)) {
        index = Math.floor(Math.random() * (headingToColorize.length))
      }
      headingToColorize[index].classList.add(styles.headingSpanSkyBlue)

      while (Array.from(headingToColorize[index].classList).includes(styles.headingSpanSkyBlue) || Array.from(headingToColorize[index].classList).includes(styles.headingSpanBeige)) {
        index = Math.floor(Math.random() * (headingToColorize.length))
      }
      headingToColorize[index].classList.add(styles.headingSpanBeige)
    }
  })

  const newActiveNavlink = () => {
    const portfolioLink = document.querySelector('#navlink_portfolio')
    portfolioLink.classList.add(navlinkStyles.activeLink)
  }

  // highlights current location
  useEffect(() => {
    newActiveNavlink()
  })

  const frontend = {
    'Next.js': 'https://nextjs.org/',
    'React': 'https://reactjs.org/',
    'TypeScript': 'https://www.typescriptlang.org/',
    'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
    'HTML5': 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference',
    'Sass/SCSS': 'https://sass-lang.com/',
    'CSS3': 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference',
  }

  const backend = {
    'Ruby on Rails': 'https://guides.rubyonrails.org/',
    'Ruby': 'https://ruby-doc.org/core-3.0.1/',
    'JSON Web Token (JWT)': 'https://github.com/jwt/ruby-jwt',
  }

  const aws = {
    'AWS Amplify': 'https://aws.amazon.com/amplify/?nc2=h_ql_prod_mo_awsa',
    'Amazon Simple Email Service (SES)': 'https://aws.amazon.com/ses/?nc2=h_ql_prod_ba_ses',
    'AWS Certificate Manager': 'https://aws.amazon.com/certificate-manager/?nc2=h_ql_prod_se_cm',
    'CloudFront': 'https://aws.amazon.com/cloudfront/?nc2=h_ql_prod_nt_cf',
    'Elastic Cloud Compute (EC2)': 'https://aws.amazon.com/ec2/?nc2=h_ql_prod_fs_ec2&ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc',
    'Identity and Access Management (IAM)': 'https://aws.amazon.com/iam/?nc2=h_ql_prod_se_iam',
    'Route 53': 'https://aws.amazon.com/route53/?nc2=h_ql_prod_nt_r53',
    'Virtual Private Cloud (VPC)': 'https://aws.amazon.com/vpc/?nc2=h_ql_prod_fs_vpc',
  }

  const additionalServices = {
    'GitHub': 'https://github.com/',
    'Nginx': 'https://www.nginx.com/',
    'Passenger': 'https://www.phusionpassenger.com/',
    'CertBot': 'https://certbot.eff.org/',
  }

  return (
    <div id='about' className={`${styles.aboutDiv} ${styles2.showPageList}`}>
      <h2 className={`colorizedHeading ${styles.headingWithBreak}`}>
        {technologiesUsedString()}
      </h2>

      <div>
        <ul>
          <li>
            <ul>
              <li>
                <p>
                  Frontend:
                </p>
              </li>
              {Object.entries(frontend).map(([ tech, loc], index) => (
                <li key={index}>
                  <p>
                    <a href={loc} className={styles.techLink} target='_blank' rel='noreferrer'>
                      {tech}
                    </a>
                  </p>
                </li>
              ))}
              <li>
                <p>
                  <a href='https://fontawesome.com/' className={styles.techLink} target='_blank' rel='noreferrer'>FontAwesome</a> (<a href='https://fontawesome.com/license' className={styles.techLink} target='_blank' rel='noreferrer'>license</a>)
                </p>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <p>
                  Backend:
                </p>
              </li>
              {Object.entries(backend).map(([ tech, loc], index) => (
                <li key={index}>
                  <p>
                    <a href={loc} className={styles.techLink} target='_blank' rel='noreferrer'>
                      {tech}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <p>
                  Hosting Through Amazon Web Services (AWS):
                </p>
              </li>
              {Object.entries(aws).map(([ tech, loc], index) => (
                <li key={index}>
                  <p>
                    <a href={loc} className={styles.techLink} target='_blank' rel='noreferrer'>
                      {tech}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <p>
                  Additional Services Used:
                </p>
              </li>
              {Object.entries(additionalServices).map(([ tech, loc], index) => (
                <li key={index}>
                  <p>
                    <a href={loc} className={styles.techLink} target='_blank' rel='noreferrer'>
                      {tech}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default ThisWebsiteTechnologies
