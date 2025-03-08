import Image from "next/image"

const Logo = () => {
    return (
        <Image
            src='/images/6s-logo.png'
            width={140}
            height={46}
            className="object-cover"
            alt="Butterswipe"/>
    )
}

export default Logo;