"use client";

import { ReactNode } from "react";
import Link from "next/link";
import styles from "@/components/buttons/buttons.module.css";

type linkProps = {
    href: string;
    children: ReactNode;
}

export default function LinkButton({ href, children }: linkProps) {
    return (
        <Link href={href} className={styles.button}>
            { children }
        </Link>
    );
}