"use client";
import React, {
    useState,
    Children,
    useRef,
    useLayoutEffect,
    HTMLAttributes,
    ReactNode,
  } from "react";
  import { motion, AnimatePresence, Variants } from "framer-motion";
  
  interface StepperProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    initialStep?: number;
    onStepChange?: (step: number) => void;
    onFinalStepCompleted?: () => void;
    stepCircleContainerClassName?: string;
    stepContainerClassName?: string;
    contentClassName?: string;
    footerClassName?: string;
    backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    backButtonText?: string;
    nextButtonText?: string;
    disableStepIndicators?: boolean;
    step1checker?: () => boolean; // Function to check step 1 conditions
    step2checker?: () => boolean; // Function to check step 1 conditions
    renderStepIndicator?: (props: {
      step: number;
      currentStep: number;
      onStepClick: (clicked: number) => void;
    }) => ReactNode;
  }
  
  export default function Stepper({
    children,
    initialStep = 1,
    onStepChange = () => {},
    onFinalStepCompleted = () => {},
    stepCircleContainerClassName = "",
    stepContainerClassName = "",
    contentClassName = "",
    footerClassName = "",
    backButtonProps = {},
    nextButtonProps = {},
    backButtonText = "Back",
    nextButtonText = "Continue",
    disableStepIndicators = false,
    renderStepIndicator,
    step1checker= () => {return true }, // Default to an empty function if not provided
    step2checker= () => {return true }, // Default to an empty function if not provided
    ...rest
  }: StepperProps) {
    const [currentStep, setCurrentStep] = useState<number>(initialStep);
    const [direction, setDirection] = useState<number>(0);
    const stepsArray = Children.toArray(children);
    const totalSteps = stepsArray.length;
    const isCompleted = currentStep > totalSteps;
    const isLastStep = currentStep === totalSteps;
  
    const updateStep = (newStep: number) => {
      setCurrentStep(newStep);
      if (newStep >= totalSteps) {
        console.log("Final step reached");
      } else {
        onStepChange(newStep);
      }
    };
  
    const handleBack = () => {
      if (currentStep > 1) {
        setDirection(-1);
        updateStep(currentStep - 1);
      }
    };
  
    const handleNext = async() => {
      console.log("Step number-->", currentStep);
      let steppass = false;
      if (currentStep === 1) {
       steppass = await step1checker()
      }
     else{
        steppass = await step2checker()
     }
      if (!isLastStep && steppass) {
        console.log("totalSteps-->", totalSteps);
        setDirection(1);
        updateStep(currentStep + 1);
      }
    };
  
    const handleComplete = () => {
     console.log("Final final step completed");
     onFinalStepCompleted();
    };
  
    return (
      <div
        className="flex h-full w-full  "
        {...rest}
      >
        <div
          className={`mx-auto w-[60%] max-tablet:w-[80%] max-mobile:w-[90%] max-smobile:w-[95%] rounded-4xl shadow-xl ${stepCircleContainerClassName}`}
          style={{ border: "1px solid #222" }}
        >
          <div
            className={`${stepContainerClassName} flex w-full items-center p-8`}
          >
            {stepsArray.map((_, index) => {
              const stepNumber = index + 1;
              const isNotLastStep = index < totalSteps - 1;
              return (
                <React.Fragment key={stepNumber}>
                  {renderStepIndicator ? (
                    renderStepIndicator({
                      step: stepNumber,
                      currentStep,
                      onStepClick: (clicked) => {
                        setDirection(clicked > currentStep ? 1 : -1);
                        updateStep(clicked);
                      },
                    })
                  ) : (
                    <StepIndicator
                      step={stepNumber}
                      disableStepIndicators={disableStepIndicators}
                      currentStep={currentStep}
                      onClickStep={(clicked) => {
                        setDirection(clicked > currentStep ? 1 : -1);
                        updateStep(clicked);
                      }}
                    />
                  )}
                  {isNotLastStep && (
                    <StepConnector isComplete={currentStep > stepNumber} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
  
          <StepContentWrapper
            isCompleted={isCompleted}
            currentStep={currentStep}
            direction={direction}
            className={`space-y-2 px-8 ${contentClassName}`}
          >
            {stepsArray[currentStep - 1]}
          </StepContentWrapper>
  
          {!isCompleted && (
            <div className={`px-8 pb-8 ${footerClassName}`}>
              <div
                className={`mt-10 flex ${
                  currentStep !== 1 ? "justify-between" : "justify-end"
                }`}
              >
                {currentStep !== 1 && (
                  <button
                    onClick={handleBack}
                    className={`${
                      currentStep === 1
                        ? "hidden"
                        : "text-[1.5rem] font-semibold cursor-pointer hover:scale-[1.03] transition-all text-white bg-[#df032b] px-[2.5rem] py-[0.4rem] flex  rounded-[5px] "
                    }`}
                    {...backButtonProps}
                  >
                    {backButtonText}
                  </button>
                )}
                <button
                  onClick={isLastStep ? handleComplete : handleNext}
                  className="text-[1.5rem] font-semibold cursor-pointer hover:scale-[1.03] transition-all text-white bg-[#00B727] px-[2.5rem] py-[0.4rem] flex  rounded-[5px] "
                  {...nextButtonProps}
                >
                  {isLastStep ? "Submit" : nextButtonText}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  interface StepContentWrapperProps {
    isCompleted: boolean;
    currentStep: number;
    direction: number;
    children: ReactNode;
    className?: string;
  }
  
  function StepContentWrapper({
    isCompleted,
    currentStep,
    direction,
    children,
    className = "",
  }: StepContentWrapperProps) {
    const [parentHeight, setParentHeight] = useState<number>(0);
  
    return (
      <motion.div
        style={{ position: "relative", overflow: "hidden" }}
        animate={{ height: isCompleted ? 0 : parentHeight }}
        transition={{ type: "spring", duration: 0.4 }}
        className={className}
      >
        <AnimatePresence initial={false} mode="sync" custom={direction}>
          {!isCompleted && (
            <SlideTransition
              key={currentStep}
              direction={direction}
              onHeightReady={(h) => setParentHeight(h+10)}
            >
              {children}
            </SlideTransition>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
  
  interface SlideTransitionProps {
    children: ReactNode;
    direction: number;
    onHeightReady: (height: number) => void;
  }
  
  function SlideTransition({
    children,
    direction,
    onHeightReady,
  }: SlideTransitionProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
  
    useLayoutEffect(() => {
      if (containerRef.current) {
        onHeightReady(containerRef.current.offsetHeight);
      }
    }, [children, onHeightReady]);
  
    return (
      <motion.div
        ref={containerRef}
        custom={direction}
        variants={stepVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.4 }}
        style={{ position: "absolute", left: 0, right: 0, top: 0 }}
      >
        {children}
      </motion.div>
    );
  }
  
  const stepVariants: Variants = {
    enter: (dir: number) => ({
      x: dir >= 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir >= 0 ? "50%" : "-50%",
      opacity: 0,
    }),
  };
  
  interface StepProps {
    children: ReactNode;
  }
  
  export function Step({ children }: StepProps) {
    return <div className="px-8">{children}</div>;
  }
  
  interface StepIndicatorProps {
    step: number;
    currentStep: number;
    onClickStep: (clicked: number) => void;
    disableStepIndicators?: boolean;
  }
  
  function StepIndicator({
    step,
    currentStep,
    onClickStep,
    disableStepIndicators = false,
  }: StepIndicatorProps) {
    const status =
      currentStep === step
        ? "active"
        : currentStep < step
          ? "inactive"
          : "complete";
  
    const handleClick = () => {
      // if (step !== currentStep && !disableStepIndicators) {
      //   onClickStep(step);
      // }
    };
  
    return (
      <motion.div
        onClick={handleClick}
        className="relative cursor-default outline-none focus:outline-none"
        animate={status}
        initial={false}
      >
        <motion.div
          variants={{
            inactive: { scale: 1, backgroundColor: "#222", color: "#a3a3a3" },
            active: { scale: 1, backgroundColor: "#5095ff", color: "#5227FF" },
            complete: { scale: 1, backgroundColor: "#00E227", color: "#3b82f6" },
          }}
          transition={{ duration: 0.3 }}
          className="flex h-8 w-8 items-center justify-center rounded-full font-semibold"
        >
          {status === "complete" ? (
            <CheckIcon className="h-4 w-4 text-black" />
          ) : status === "active" ? (
            <div className="h-3 w-3 rounded-full bg-[#060010]" />
          ) : (
            <span className="text-sm">{step}</span>
          )}
        </motion.div>
      </motion.div>
    );
  }
  
  interface StepConnectorProps {
    isComplete: boolean;
  }
  
  function StepConnector({ isComplete }: StepConnectorProps) {
    const lineVariants: Variants = {
      incomplete: { width: 0, backgroundColor: "transparent" },
      complete: { width: "100%", backgroundColor: "#5227FF" },
    };
  
    return (
      <div className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded bg-neutral-600">
        <motion.div
          className="absolute left-0 top-0 h-full"
          variants={lineVariants}
          initial={false}
          animate={isComplete ? "complete" : "incomplete"}
          transition={{ duration: 0.4 }}
        />
      </div>
    );
  }
  
  interface CheckIconProps extends React.SVGProps<SVGSVGElement> {}
  
  function CheckIcon(props: CheckIconProps) {
    return (
      <svg
        {...props}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: 0.1,
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    );
  }
  