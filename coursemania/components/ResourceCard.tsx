import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

interface Props {
    id: string;
    title: string;
    image: string;
}

const ResourceCard = ({ id, title, image } : Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
        <Link href={`/resource/${id}`}>
            <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                <div className="h-fit w-full">
                    <Image
                        src={image}
                        className="h-full rounded-md object-cover"
                        width={384}
                        height={440}
                        alt={title}
                    />
                </div>
                <CardTitle className="text-white paragraph-semibold line-clamp-1">
                    {title}
                </CardTitle>
            </CardHeader>
        </Link>
        <CardContent className="flex flex-between mt-4 p-0">
            <div className="flex-center body-medium gap-2.5 text-white-800">
                Beginner to Advance
            </div>
            <Link 
                href={`/resource/${id}`}
                className="text-white flex-center gap-1.5 body-medium text-gradient_purple-blue"
            >
                Check Out
                <Image
                    src="/arrow-blue.svg"
                    alt="download num"
                    width={13}
                    height={10}
                    className="object-contain"
                />
            </Link>
        </CardContent>
    </Card>
  )
}

export default ResourceCard