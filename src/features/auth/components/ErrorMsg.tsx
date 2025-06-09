import React from "react";
import WarningSignIcon from "@/assets/Svg/warning.svg";

type ErrorMsgProps = {
    errorArray?: string[];
};

export default function ErrorMsg({ errorArray }: ErrorMsgProps) {
    if (errorArray)
        return (
            <div className="text-sm text-red-600 mt-1.5">
                {errorArray.map((error, id) => (
                    <div key={id} className="flex items-center">
                        <div className="size-[0.9rem] mx-2">
                            <WarningSignIcon className="h-full w-auto" />
                        </div>
                        <p key={id}>{error}</p>
                    </div>
                ))}
            </div>
        );
}
