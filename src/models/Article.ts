import Events from "./Events";
import Launches from "./Launches";

// link = "https://api.spaceflightnewsapi.net/v3/articles?url_contains=nasa&_limit=20"

export default interface Article {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: Launches[];
  events: Events[];
}
