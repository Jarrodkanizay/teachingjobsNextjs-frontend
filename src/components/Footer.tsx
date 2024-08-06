import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 px-7 bg-[#e74b7f] content-grid">
      <div className=" text-white font-open-sans grid grid-cols-1 md:grid-cols-4 gap-4 pb-4">
        <div className=" text-white font-open-sans">
          <ul>
            <li className="text-white font-bold text-xl pb-1 ">Navigation</li>
            <li>
              <a className="footer-nav__link" href="/">
                Teaching Jobs
              </a>
            </li>
            {/* <li>
              <Link href="/">Home</Link>
            </li> */}
            <li>
              <Link href="/about/">About Teaching Jobs</Link>
            </li>
            {/* <li><Link href="/school-career-advice/">Career Advice</Link></li>                     */}
            <li>
              <Link href="/contact-us/">Contact Us</Link>
            </li>

            <li>
              <Link href="/sitemap/">Site Map</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-white font-bold text-xl pb-1">Job Seekers</li>
            <li>
              <Link href="/jobs/">Find Jobs</Link>
            </li>
            <li>
              <Link href="/principal/">Principal Jobs</Link>
            </li>
            <li>
              <Link href="/employers/">Find Employers</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-white font-bold text-xl pb-1 ">Schools</li>

            <li>
              <a
                target="_blank"
                className="footer-nav__link"
                href="/post-a-job/"
              >
                Post a Job
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-white font-bold text-xl pb-1 ">Socials</li>
            {/* <li><a href="https://teachingjobs.com.au/career-advice">Career Advice</a></li> */}
            <li>
              <a
                target="_blank"
                className="footer-nav__link"
                href="https://www.facebook.com/TeachingJobsAUS"
                rel="noopener"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                target="_blank"
                className="footer-nav__link"
                href="https://www.instagram.com/teachingjobs_aus/"
                rel="noopener"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/teachingjobs"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
