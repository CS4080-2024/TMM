import { Checkbox } from "@/components/ui/checkbox";




export const Task=({isFinish, content}:{isFinish:boolean; content:string})=>{



    return (
        <div className = "flex items-center space-x-2">
            <Checkbox checked={isFinish}/>
            <label className="text-sm font-medium leading-none">
                
                {content}

            </label>
                
        
        
        </div>
    )

}