'use client'
import { useState, useRef, useEffect } from 'react';
import { BsFillShareFill } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ShareButton = ({ jobId }) => {
    const [showOptions, setShowOptions] = useState(false);
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const subject = encodeURIComponent('You might like this job posting!');
    const bccEmail = encodeURIComponent('post@academicjobs.com');
    const bodyEmail = encodeURIComponent(
      `I came across this job posting on TeachingJobs and thought you might be interested: https://www.teachingjobs.com.au/jobs/myjob/${jobId}`
    );
    const widgetRef = useRef(null);
    const buttonRef = useRef(null);
    console.log(url)

    const shareOptions = [
        { name: 'Email', url: `mailto:?bcc=${bccEmail}&subject=${subject}&body=${bodyEmail}`, icon: faEnvelope},
        { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, icon: faFacebookF },
        { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, icon: faXTwitter },
        { name: 'LinkedIn', url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`, icon: faLinkedinIn },
    ];

    useEffect(() => {
        const handleClickOutside = event => {
            if (widgetRef.current && !widgetRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button ref={buttonRef} className="mt-2 min-w-[32px]" onClick={() => setShowOptions(prev => !prev)}>
                <BsFillShareFill size={20} color="#2867B2" />
            </button>
            {showOptions && (
                <div ref={widgetRef} className="rounded-xl mt-3 ml-[-8px] p-4 absolute bg-white border border-gray-300 p-2">
                    <ul>
                        {shareOptions.map(option => (
                            <li key={option.name}>
                                <a href={option.url} target="_blank" className="font-light" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={option.icon} className="mr-2" />
                                    {option.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ShareButton;
