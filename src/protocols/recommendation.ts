export interface RecommendationBody{
    name: string;
    youtubeLink: string;
}

export interface RecommendationWithScore extends RecommendationBody {
    initialScore: number;
}

export interface RecommendationPromise extends RecommendationBody{
    id: number;
    score: number;
}
        