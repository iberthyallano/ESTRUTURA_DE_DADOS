import Q1_2_3 from "../../src/prova_01/Q1_2_3";

let q;
let base = 2;
let expoente = 2;

beforeEach(() => {
    q = new Q1_2_3(base, expoente);
});

test("resolve potencia", () => {
    expect(q.resolvePotencia()).toBe(4);
});

test("resolve multiplicação", () => {
    let pot = new Q1_2_3(2, 3);
    expect(q.multiplicaPotencia(pot)).toEqual({"base": 2, "expoente": 5});
    expect(q.multiplicaPotencia(pot).resolvePotencia()).toBe(32);
    pot = new Q1_2_3(5, 3);
    expect(q.multiplicaPotencia(pot)).toBe("A questão só pediu potência de mesma base");
});

test("resolve divisão", () => {
    let pot = new Q1_2_3(2, 2);
    expect(q.dividePotencia(pot)).toEqual({"base": 2, "expoente": 0});
    expect(q.dividePotencia(pot).resolvePotencia()).toBe(1);
    pot = new Q1_2_3(5, 3);
    expect(q.multiplicaPotencia(pot)).toBe("A questão só pediu potência de mesma base");
});

test("resolve potencia de potencia", () => {
    let expo = 3;
    expect(q.potenciaDePotencia(expo)).toEqual({"base": 2, "expoente": 6});
    expect(q.potenciaDePotencia(expo).resolvePotencia()).toBe(64);
});