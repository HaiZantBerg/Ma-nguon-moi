import { useEffect, useState } from "react";

export default function Delayed({
    children,
    waitBeforeShow = 500,
}: {
    children: React.ReactNode;
    waitBeforeShow?: number;
}) {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
        return () => clearTimeout(timer);
    }, [waitBeforeShow]);

    return isShown ? children : null;
}
