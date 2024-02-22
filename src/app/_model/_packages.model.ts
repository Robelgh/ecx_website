export interface PackageCharacters
{
    packagetype: string;
    description: string;
}

export interface PackagesModel {
    id: string;
    title: string;
    amount: number;
    description: string;
    characters: PackageCharacters;
}