import React from 'react';
import { useStore } from '@/lib/store/store';
import { useRouter } from 'next/navigation';

const DispatchLink = ({ to, region, children, setDropdown, setIsNavOpen }) => {
    const router = useRouter();
   
    const { setRegion } = useStore();
    const handleClick = (e) => {
        e.preventDefault();
        let to1=""
        setRegion(region)
        console.log("region", region)
        if (region == "Global") {
            to1="/"
        } else {
            to1 = `/${region}/`
        }
        router.push(to1);

        setDropdown(false);
        setIsNavOpen(false);
    };
    return <button onClick={handleClick}>{children}</button>;
};
export default DispatchLink;
