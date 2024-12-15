import { atom } from "jotai";

type NodeId = string;

export const currentSelectNodeIdAtom = atom<NodeId>("$");
