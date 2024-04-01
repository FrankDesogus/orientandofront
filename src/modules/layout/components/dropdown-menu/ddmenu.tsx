import { Popover, Transition } from "@headlessui/react"
import {
    useFeaturedProductsQuery,
    useNavigationCollections,
} from "@lib/hooks/use-layout-data"
import repeat from "@lib/util/repeat"
import { DropdownMenu } from "@medusajs/ui"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import clsx from "clsx"
import { chunk } from "lodash"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const Ddmenu = () => {
    const [open, setOpen] = useState(false)
    const { push } = useRouter()
    const { data: collections, isLoading: loadingCollections } =
        useNavigationCollections()
    const { data: products, isLoading: loadingProducts } =
        useFeaturedProductsQuery()

    return (
        <div


            className=""
        >
            <div className="flex items-center  gap-x-12">
            <ul><li>
                <Link href="/store" className="relative flex h-full" passHref>
                    <div
                        className={clsx(
                            "relative h-full mr-5 flex items-center transition-all ease-out duration-200 focus:outline-none"
                        )}
                        onClick={() => push("/store")}
                    >
                        Bambino
                    </div>
                    
                </Link>
                </li>
                <li className="absolute invisible"><div><ul><li>asd</li><li>asd</li></ul></div></li>
                </ul>
                <Link href="/store" className="relative flex h-full" passHref>
                    <div
                        className={clsx(
                            "relative h-full mr-5 flex items-center transition-all ease-out duration-200 focus:outline-none"
                        )}
                        onClick={() => push("/store")}
                    >
                        Donna
                    </div>
                </Link>
                <Link href="/store" className="relative flex h-full" passHref>
                    <div
                        className={clsx(
                            "relative h-full mr-5 flex items-center transition-all ease-out duration-200 focus:outline-none"
                        )}
                        onClick={() => push("/store")}
                    >
                        Uomo
                    </div>
                </Link>
                <Link href="/store" className="relative flex h-full" passHref>
                    <div
                        className={clsx(
                            "relative h-full mr-5 flex items-center transition-all ease-out duration-200 focus:outline-none"
                        )}
                        onClick={() => push("/store")}
                    >
                        Accessori
                    </div>
                </Link>
                <Link href="/store" className="relative flex h-full" passHref>
                    <div
                        className={clsx(
                            "relative h-full mr-5 flex items-center transition-all ease-out duration-200 focus:outline-none"
                        )}
                        onClick={() => push("/store")}
                    >
                        Beauty
                    </div>
                </Link>
                <Link href="/store" className="relative flex h-full" passHref>
                    <div
                        className={clsx(
                            "relative h-full mr-5 flex items-center transition-all ease-out duration-200 focus:outline-none"
                        )}
                        onClick={() => push("/store")}
                    >
                        Beaty & Co
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Ddmenu
