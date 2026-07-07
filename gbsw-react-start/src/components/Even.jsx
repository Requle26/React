import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        console.log("mounted")
        
        return () => {
            console.log("unmounted")
        }
    }, []);
    return (
        <div>
            현제 카운트는 짝수입니다
        </div>
    )
}

export default Even;