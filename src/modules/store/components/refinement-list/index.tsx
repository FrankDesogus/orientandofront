import { useCheckout } from "@lib/context/checkout-context"
import { ProductCategoryWithChildren } from "@lib/data"
import { StateType } from "@lib/hooks/use-toggle-state"
import { StoreGetProductsParams } from "@medusajs/medusa"
import { Product, ProductCategory } from "@medusajs/product"
import { Label, Checkbox, clx, DropdownMenu, IconButton } from "@medusajs/ui"
import { any } from "cypress/types/bluebird"
import { useCollections, useProductCategories, useProductCategory } from "medusa-react"
import { ChangeEvent, useState } from "react"
import { EllipsisHorizontal } from "@medusajs/icons"


type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
}

const RefinementList = ({

  refinementList,
  setRefinementList,
}: RefinementListProps) => {
  const { product_categories, isLoading } = useProductCategories();
  const [openSection, setOpenSection] = useState(null);







  const handleToggle = (sectionId: any) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };
  const nest: { mother: ProductCategory; kinder: ProductCategory[] } = {
    mother: {} as ProductCategory,
    kinder: [] as ProductCategory[],
  };

  const cat: { mother: any; kinder: any[] }[] = [];

  if (product_categories && product_categories.length !== null) {
    // Your for loop logic
    for (let i = 0; i < product_categories.length; i++) {
      if (!product_categories[i].parent_category) {
        // Example: Push some values into the result array
        cat.push({ mother: product_categories[i], kinder: [] });
      }
    }

    // Your for loop logic
    for (let i = 0; i < product_categories.length; i++) {
      if (product_categories[i].parent_category) {
        // Example: Push some values into the result array
        for (let z = 0; z < cat.length; z++) {
          if (cat[z].mother.id === product_categories[i].parent_category_id) {
            cat[z].kinder.push(product_categories[i]);
          }
        }
      }
    }
    for (let y = 0; y < cat.length; y++) {
      console.log("ciao" + cat[y].mother.id)
      console.log("ciaociaociao" + cat[y].kinder[1].id)

    }

  }
  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = e.target

    const collectionIds = refinementList.category_id || []

    const exists = collectionIds.includes(id)

    if (checked && !exists) {
      setRefinementList({
        ...refinementList,
        collection_id: [...collectionIds, id],
      })

      return
    }

    if (!checked && exists) {
      setRefinementList({
        ...refinementList,
        collection_id: collectionIds.filter((c) => c !== id),
      })

      return
    }

    return
  }

  return (
    <>


      <div className="mx-auto mt-16">
        <div className="md:invisible mx-auto">
          <div className="bg-black-200 border-2 border-black rounded my-4">

            <DropdownMenu>
              <DropdownMenu.Trigger ><span className=" mx-4">Trigger</span>


              </DropdownMenu.Trigger>  <DropdownMenu.Content>
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
                <DropdownMenu.Item>Add</DropdownMenu.Item>
                <DropdownMenu.Item>Delete</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu></div>
        </div>
        <div className={clx("invisible lg:visible items-center", {
        })}>
          <h1 className="text-center xl:w-64 lg:w-48 lg:mx-8 xl:mx-32 text-gray-500 uppercase mb-8">Il Nostro Negozio</h1>

          {cat && cat.length > 0 && (
            <div id="accordion-collapse" data-accordion="collapse" className="lg:w-48 xl:w-64 border-gray-700 border-t lg:mx-8 xl:mx-32">
              {cat.map(
                (category) => (
                  <>
                    <h2 id={category.mother.id} className="border-y-2 border-black-200">
                      <button
                        type="button"
                        className={`flex items-center justify-between
                       w-full p-5 font-medium rtl:text-right
                       text-gray-800 bg-transparent
                       `}

                        data-accordion-target="#accordion-collapse-body-1"
                        aria-expanded={openSection === 'accordion-collapse-body-1'}
                        aria-controls="accordion-collapse-body-1"
                        onClick={() => handleToggle(category.mother.id)}
                      >
                        <Checkbox className=" hover:bg-green-400 border-2 border-black-200" id={category.mother.id} />

                        <Label htmlFor={category.mother.id} className="">

                          {category.mother.name}

                        </Label>

                        <svg
                          data-accordion-icon
                          className={`w-3 h-3 rotate-180 shrink-0 ${openSection === 'accordion-collapse-body-1' ? 'rotate-0' : ''
                            }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </button>
                    </h2>
                    <div id={category.mother.id}
                      className={`${openSection === category.mother.id ? 'block' : 'hidden'
                        }`}
                      aria-labelledby={category.mother.id}
                    >
                      <div className="ml-4 p-2">
                        {category.kinder.length > 0 &&
                          category.kinder.map((kinderCategory) => (
                            <p className="ml-4 mb-2 text-gray-500 dark:text-black">
                              <div className="flex items-center">
                                <Checkbox className=" hover:bg-green-400 border-black-200 border-2" id={kinderCategory.id} />

                                <Label htmlFor={kinderCategory.id} className="w-24">

                                  {kinderCategory.name}

                                </Label>
                              </div>
                            </p>
                          ))}
 
                      </div>
                    </div >

                  </>
                )
              )}
            </div>
          )
          }


          {/* Repeat the above structure for other sections */}
          {/* ... */}





          { /*<div className="flex gap-x-3 small:flex-col small:gap-y-3">
          <span className="text-base-semi">Collections</span>
          <ul className="text-base-regular flex items-center gap-x-4 small:grid small:grid-cols-1 small:gap-y-2">
            {product_categories?.map((c) => (
              <li key={c.id}>
                <label className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={refinementList.collection_id?.includes(
                      c.id
                    )}
                    onChange={(e) => handleCollectionChange(e, c.id)}
                    className="accent-amber-200"
                  />
                  {c.name}
                </label>
              </li>
            ))}
          </ul>
        </div>*/}
        </div >
      </div>
    </>)
}

export default RefinementList
