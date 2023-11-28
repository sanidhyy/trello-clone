import type { Card, List } from "@prisma/client";

export type ListWithCards = List & { cards: Card[] };
export type CardWithList = List & { list: List };
