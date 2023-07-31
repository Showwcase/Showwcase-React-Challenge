import React, { useEffect } from "react";
import { SelectOption } from "src/utils/types"

export const useContainerRef = (
  containerRef: React.RefObject<HTMLDivElement>,
  isOpen: boolean, 
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  highlightedIndex: number,
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>,
  options: SelectOption[],
  selectOption: (val: SelectOption) => void
) => {

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0)
  }, [isOpen])
  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen(prev => !prev)
          if (isOpen) selectOption(options[highlightedIndex])
          break
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true)
            break
          }
          
          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue)
          }
          break
        }
        case "Escape":
          setIsOpen(false)
          break
      }
    }
    containerRef.current?.addEventListener("keydown", handler)
  
    return () => {
      containerRef.current?.removeEventListener("keydown", handler)
    }
  }, [isOpen, highlightedIndex, options])
}
