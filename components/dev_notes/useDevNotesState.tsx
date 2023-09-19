import { useRouter } from "next/router";

export const useDevNotesState = () => {
  const { query } = useRouter();
  return query.notes === "true";
};
