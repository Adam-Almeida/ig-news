import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClasName: string;
}

export function ActiveLink({ children, activeClasName, ...rest }: ActiveLinkProps) {

    const { asPath } = useRouter()

    const className = asPath === rest.href ? activeClasName : '' 

    return (
        <Link {...rest}>
            {cloneElement(children, { className })}
        </Link>
    )
}