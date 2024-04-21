import React,{useState,useRef, useEffect} from 'react'
import { Button } from './Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type CategoryPillProps={
    categories:string[]
    selectedCategory:string 
    onSelect:(category:string)=>void
}

const TRANSLATE_AMOUNT=200
export default function CategoryPills({categories,selectedCategory,onSelect}:CategoryPillProps) {
const [translate,setTranslate]=useState(0)
const [isLeftVisible,setIsLeftVisible]=useState(false)
const [isRightVisible,setIsRightVisible]=useState(false)
const containRef=useRef<HTMLDivElement>(null)

// 处理按键显示和覆盖第一个和最后一个类别
useEffect(()=>{
    if(containRef.current==null)return
    const observer=new ResizeObserver(entries=>{
    const container=entries[0]?.target 
    if (container==null) return
       setIsLeftVisible(translate>0) 
       setIsRightVisible(translate+container.clientWidth<container.scrollWidth) 
    })
    observer.observe(containRef.current)
},[categories,translate])

  return (
    <div
    ref={containRef}
     className='overflow-x-hidden relative'>
    {/* 类别标签渲染 */}
    <div
     className='flex whitespace-nowrap gap-3 transition-transform w-[max-content]' style={{transform:`translateX(-${translate}px)`}}>
    {categories.map(category=>(
    <Button 
    key={category}
    onClick={()=>onSelect(category)}
    variant={selectedCategory===category?"dark":"default"} className="py-1 px-3 rounded-lg whitespace-nowrap">
    {category}
    </Button>
    ))}
    </div>

{isLeftVisible&&(
<div className='absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full'>
    <Button 
    onClick={()=>{
        setTranslate(translate=>{
            const newTranslate = translate-TRANSLATE_AMOUNT
            if (newTranslate<=0)return 0
            return newTranslate
        })
    }}
    variant="ghost" size="icon" className='h-full aspect-square w-auto p-1.5'>
       <ChevronLeft/> 
    </Button>
</div>
)}
{isRightVisible&&(
<div className='absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end'>
    <Button 
    onClick={()=>{
    setTranslate(translate=>{
        if (containRef.current==null){
            return translate
        }
        const newTranslate=translate+TRANSLATE_AMOUNT
        const edge=containRef.current.scrollWidth
        const width=containRef.current.clientWidth
        if (newTranslate+width>=edge){
            return edge-width
        }
        return newTranslate
    })
    }}
    variant="ghost" size="icon" className='h-full aspect-square w-auto p-1.5'>
       <ChevronRight/> 
    </Button>
</div>
)}
    </div>
  )
}

