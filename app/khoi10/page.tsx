import ChapterRoute from "@/components/Main/ChapterRoute";
import { Suspense } from "react";
import React from "react";

export default function page() {
    return (
        <Suspense>
            <ChapterRoute grade={0} />
        </Suspense>
    );
}
