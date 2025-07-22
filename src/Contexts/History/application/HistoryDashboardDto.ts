export interface HistoryDashboardDto {
    lastThreeMonths: {
        name: string;
        [category: string]: number | string;
    }[];
}
