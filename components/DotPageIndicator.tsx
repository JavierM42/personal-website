import { FC } from "react";
import { AnimateSharedLayout, motion } from 'framer-motion';

type Props = {
  numberOfPages: number;
  currentPageIndex: number;
}

const DotPagination: FC<Props> = ({ numberOfPages, currentPageIndex }: Props) => {
  return (
    <div className="flex items-center space-x-1">
      <AnimateSharedLayout>
        {Array.from(Array(numberOfPages)).map((_, index) => (
          <div key={index} className="rounded-full w-1.5 h-1.5 bg-gray-200">
            {index === currentPageIndex && (
              <motion.div
                layoutId="selected-indicator"
                className="w-full h-full bg-gray-400 rounded-full"
                transition={{ duration: 0.1 }}
              />
            )}
          </div>
        ))}
      </AnimateSharedLayout>
    </div>
  )
};

export default DotPagination;
