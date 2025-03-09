"use client";

import { getUserData } from "@/components/FetchingData/getData";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Page() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["userData"],
        queryFn: getUserData,
    });

    if (!isLoading)
        return <div className="translate-y-20">1{data.message}</div>;
}
