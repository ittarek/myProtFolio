import React from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack';

export const Recomand = () => {
  return (
    <>
      {/* Scroll Stack Section */}
      <ScrollStack
        useWindowScroll={true} // পুরো page scroll হবে
        stackPosition="20%"
        itemScale={0.03}
        rotationAmount={2} // হালকা rotate effect
      >
        <ScrollStackItem itemClassName="bg-blue-500">
          <h2 className="text-white text-3xl">Feature 1</h2>
          <p className="text-white">Your content here</p>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-purple-500">
          <h2 className="text-white text-3xl">Feature 2</h2>
          <p className="text-white">Your content here</p>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-pink-500">
          <h2 className="text-white text-3xl">Feature 3</h2>
          <p className="text-white">Your content here</p>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-orange-500">
          <h2 className="text-white text-3xl">Feature 4</h2>
          <p className="text-white">Your content here</p>
        </ScrollStackItem>
      </ScrollStack>
      
    </>
  );
}
