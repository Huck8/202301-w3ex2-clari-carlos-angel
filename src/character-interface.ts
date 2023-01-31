export interface Character {
  name: string;
  family: string;
  age: number;
  status: boolean;
  type: string;
  series: string;

  communicate(): string;
  toDie(): void;
}
