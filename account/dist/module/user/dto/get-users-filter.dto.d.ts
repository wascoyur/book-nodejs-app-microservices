export default class GetUserFilterDto {
    readonly userIds?: string[];
    readonly phones?: string[];
    readonly take?: number;
    readonly skip?: number;
}
