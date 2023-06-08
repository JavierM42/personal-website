import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  Placement,
  shift,
  useDelayGroup,
  useDelayGroupContext,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
} from "@floating-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { uniqueId } from "lodash";
import {
  cloneElement,
  FC,
  ReactElement,
  Ref,
  useCallback,
  useRef,
  useState,
} from "react";

export type WithTooltipProps = {
  /** Tooltip text */
  text: string | null;
  /** Must accept a ref, not have a CSS 'display: contents', and accept aria-attributes, onMouseEnter, onMouseLeave, onFocus and onBlur as props */
  children: ReactElement;
  /** For elements that need their tooltip displayed immediately on hover */
  instant?: boolean;
  /** Tooltip offset. Defaults to 4 pixels. */
  offset?: number;
  placement?: Placement;
  /** Required to preserve the ref of the cloned child element. Pass the same ref that you pass to the child element. */
  elementRef?: Ref<HTMLElement>;
};

const WithTooltip: FC<WithTooltipProps> = ({
  children,
  text,
  instant = false,
  offset: offsetValue = 4,
  placement = "top",
  elementRef,
}) => {
  const isDisabled = !text;

  const idRef = useRef(uniqueId());
  const { delay, setCurrentId } = useDelayGroupContext();

  const [open, setOpen] = useState(false);

  const onOpenChange = useCallback(
    (open: boolean) => {
      const newValue = open && !isDisabled;
      setOpen(newValue);

      if (newValue) {
        setCurrentId(idRef.current);
      }
    },
    [idRef, setCurrentId, isDisabled]
  );

  const { x, y, refs, strategy, context } = useFloating({
    placement,
    open,
    onOpenChange,
    middleware: [offset(offsetValue), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      delay: instant ? 0 : delay,
      restMs: 500,
    }),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context, { referencePress: true }),
    useDelayGroup(context, { id: idRef.current }),
  ]);

  const mergedReferenceRef = useMergeRefs([
    refs.setReference,
    ...(elementRef ? [elementRef] : []),
  ]);

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({
          ...children.props,
          ref: mergedReferenceRef,
          tooltip: text,
        })
      )}
      <FloatingPortal>
        <AnimatePresence>
          {open && !isDisabled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={
                // When in "grouped phase", make the transition faster
                typeof delay === "object" && delay.open === 1
                  ? { duration: 0.1 }
                  : { type: "spring", damping: 20, stiffness: 300 }
              }
              className="z-50 pointer-events-none px-4 py-2 shadow rounded-md bg-on-surface text-surface text-sm max-w-[236px] w-max"
              {...getFloatingProps({
                ref: refs.setFloating,
                style: {
                  position: strategy,
                  top: y ?? "",
                  left: x ?? "",
                },
              })}
            >
              {text && (
                <div className="flex-1 text-on-surface-inverse">{text}</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
};

export default WithTooltip;
