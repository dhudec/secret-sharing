const stripeFormula = {
  id: 'ef303844-f349-4a3b-99b5-1c35e9fb7ae4',
  name: 'Stripe',
  description: 'Payment information reactors.',
  source_token_type: 'card',
  tags: ['atomic card', 'stripe', 'pci'],
  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMkMwIDAuODk1NDMxIDAuODk1NDMxIDAgMiAwSDM4QzM5LjEwNDYgMCA0MCAwLjg5NTQzMSA0MCAyVjM4QzQwIDM5LjEwNDYgMzkuMTA0NiA0MCAzOCA0MEgyQzAuODk1NDMxIDQwIDAgMzkuMTA0NiAwIDM4VjJaIiBmaWxsPSIjNjM1QkZGIi8+CjxwYXRoIGQ9Ik0xNi4wNDE5IDEyLjk4NTJDMTcuMTM5MiAxMi4xMTcxIDE4LjU1MDkgMTEuNzQ5NCAxOS45Mjg3IDExLjY4QzIxLjY0ODYgMTEuNjAyMSAyMy4zOSAxMS44NjY5IDI0Ljk5MDggMTIuNTA3OEMyNC45ODk3IDEzLjk0MyAyNC45OTEzIDE1LjM3NzggMjQuOTkwMyAxNi44MTNDMjQuMDM2IDE2LjMwMjggMjIuOTk0MSAxNS45NjU0IDIxLjkzMDIgMTUuNzc2OEMyMS4zNTkzIDE1LjY4MTIgMjAuNzc4NSAxNS42MjEyIDIwLjE5OTMgMTUuNjQ4OUMxOS44NjQ1IDE1LjY3MDggMTkuNTExNCAxNS43MjIgMTkuMjMzMSAxNS45MjI1QzE4Ljg4MTYgMTYuMTY5MSAxOC44MDI3IDE2LjY5OTIgMTkuMDIwNSAxNy4wNThDMTkuMjYxOCAxNy40MjkzIDE5LjY4NzQgMTcuNjE1OCAyMC4wNzk3IDE3Ljc4NjZDMjEuMDg4OCAxOC4xOTAzIDIyLjE1IDE4LjQ2MTQgMjMuMTI1NyAxOC45NDcxQzIzLjk1ODIgMTkuMzUxOSAyNC43NDA2IDE5LjkyMTcgMjUuMjM3OCAyMC43MTY2QzI1LjgwMTQgMjEuNjA0NSAyNS45NTcgMjIuNjk1NiAyNS44NjA0IDIzLjcyODdDMjUuNzc0MiAyNC42ODk3IDI1LjQwMjQgMjUuNjMxOSAyNC43NjE1IDI2LjM1OUMyNC4wNjg5IDI3LjE1NyAyMy4xMDkgMjcuNjgzNSAyMi4xMDQxIDI3Ljk3OTFDMjAuODgyNCAyOC4zMzkgMTkuNTg5MyAyOC4zOTQzIDE4LjMyNjkgMjguMjc5OUMxNy4wMDA4IDI4LjE1NDYgMTUuNjk2NiAyNy44MTU2IDE0LjQ3MzQgMjcuMjkwMkMxNC40NzI0IDI1LjgzNjcgMTQuNDcyOSAyNC4zODMxIDE0LjQ3MjkgMjIuOTI5NkMxNS40MjUgMjMuNDQ2MSAxNi40Mzg4IDIzLjg1MiAxNy40ODkxIDI0LjExOTRDMTguMjY5OSAyNC4zMTM3IDE5LjA3NzkgMjQuNDQwNiAxOS44ODM4IDI0LjM3NzRDMjAuMjMyNyAyNC4zNDM0IDIwLjU5NzMgMjQuMjcwOCAyMC44Nzk4IDI0LjA1MUMyMS4xOTAxIDIzLjgwOTcgMjEuMjg4MyAyMy4zNjY4IDIxLjE4MDcgMjMuMDAwMUMyMS4wODkzIDIyLjcwNTUgMjAuODUwNiAyMi40ODc3IDIwLjYwMDkgMjIuMzIyN0MyMC4xOTA0IDIyLjA1ODQgMTkuNzMwOCAyMS44ODQ1IDE5LjI3NjQgMjEuNzEzMkMxOC4zMDYgMjEuMzUzMyAxNy4zMTA1IDIxLjAzMTYgMTYuNDE2OSAyMC40OTgzQzE1LjcwMDMgMjAuMDc2OCAxNS4wNTQyIDE5LjQ5MTkgMTQuNjgyOSAxOC43Mzc3QzE0LjIzMTYgMTcuODI5OSAxNC4xOTI0IDE2Ljc3MDcgMTQuMzY3OSAxNS43ODczQzE0LjU2MDYgMTQuNjkxIDE1LjE2MTMgMTMuNjY5OSAxNi4wNDE5IDEyLjk4NTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMiAxSDM4Vi0xSDJWMVpNMzkgMlYzOEg0MVYySDM5Wk0zOCAzOUgyVjQxSDM4VjM5Wk0xIDM4VjJILTFWMzhIMVpNMiAzOUMxLjQ0NzcyIDM5IDEgMzguNTUyMyAxIDM4SC0xQy0xIDM5LjY1NjggMC4zNDMxNDcgNDEgMiA0MVYzOVpNMzkgMzhDMzkgMzguNTUyMyAzOC41NTIzIDM5IDM4IDM5VjQxQzM5LjY1NjkgNDEgNDEgMzkuNjU2OCA0MSAzOEgzOVpNMzggMUMzOC41NTIzIDEgMzkgMS40NDc3MiAzOSAySDQxQzQxIDAuMzQzMTQ2IDM5LjY1NjkgLTEgMzggLTFWMVpNMiAtMUMwLjM0MzE0NiAtMSAtMSAwLjM0MzE0NiAtMSAySDFDMSAxLjQ0NzcyIDEuNDQ3NzIgMSAyIDFWLTFaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+Cg==',
  created_at: '2021-03-22T17:11:13.156Z',
  modified_at: '2021-03-22T17:11:13.156Z',
  status: 'verified',
  configuration: [
    {
      name: 'STRIPE_API_KEY',
      type: 'string',
      description: 'api key'
    }
  ],
  request_parameters: [],
  code: `const fetch = require('node-fetch');

const { number, expiration_month, expiration_year, cvc } = context.sourceToken;

const body = new URLSearchParams({
  'card[number]': number,
  'card[exp_month]': expiration_month,
  'card[exp_year]': expiration_year,
  'card[cvc]': cvc,
});

const headers = new Headers();
headers.append('Authorization', 'Basic ' + Buffer.from(context.configuration.STRIPE_API_KEY).toString('base64'));

const stripeToken = await fetch('https://api.strip.com/v1/tokens', {
  method: 'POST',
  headers,
  body,
});`
};

const dwollaFormula = {
  id: '78ed42d1-1fcf-4012-b92d-8625d4c33739',
  name: 'Dwolla',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mollis ante, at elementum nisl. Proin ligula est, interdum eget blandit non, lobortis et lectus.',
  source_token_type: 'bank',
  tags: ['atomic bank', 'dwolla', 'ach', 'transfer'],
  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMkMwIDAuODk1NDMxIDAuODk1NDMxIDAgMiAwSDM4QzM5LjEwNDYgMCA0MCAwLjg5NTQzMSA0MCAyVjM4QzQwIDM5LjEwNDYgMzkuMTA0NiA0MCAzOCA0MEgyQzAuODk1NDMxIDQwIDAgMzkuMTA0NiAwIDM4VjJaIiBmaWxsPSIjMkQyRDQ4Ii8+CjxwYXRoIGQ9Ik0xOS43MzU3IDEwLjY0NzZDMjAuMjk4NSAxMC41MjM2IDIwLjc2MzggMTAuOTM5NCAyMS4yMjUzIDExLjE4NjVDMjMuMjY5OSAxMi4zNTMgMjUuMjk3NCAxMy41NDgxIDI3LjM0NzggMTQuNzA0MUMyNy43NzEgMTQuOTE1OSAyOC4yMjY4IDE1LjI1MDcgMjguMjM1NCAxNS43NzE1QzI4LjI0OTcgMTguNTM1NiAyOC4yMzI1IDIxLjMwMDcgMjguMjQyMSAyNC4wNjU4QzI4LjI2OTggMjQuNDk3OSAyOC4wMzE5IDI0LjkyMDQgMjcuNjQ4NyAyNS4xMjM2QzI1LjI1OTEgMjYuNDg2NiAyMi44NzkxIDI3Ljg2NzcgMjAuNDkyNCAyOS4yMzY0QzIwLjE1NTIgMjkuNDI1MyAxOS43MjkgMjkuNDIwNSAxOS4zOTU2IDI5LjIyNTlDMTcuMDMzNyAyNy44NjU4IDE0LjY3NDcgMjYuNDk5IDEyLjMxIDI1LjE0MzZDMTEuOTUxNyAyNC45NDYyIDExLjY3MzcgMjQuNTgwOSAxMS42ODYxIDI0LjE1ODNDMTEuNjY3OSAyMS41MTgyIDExLjY5NTcgMTguODc3MSAxMS42NjcgMTYuMjM2QzExLjY3MjcgMTUuOTMwNyAxMS42NjUxIDE1LjYwNTUgMTEuODE4IDE1LjMyOThDMTEuOTYyMiAxNS4wNjU2IDEyLjIyNzggMTQuOTA1NCAxMi40NzkxIDE0Ljc1NzVDMTQuNDcyMiAxMy42Mzc4IDE2LjQzMzcgMTIuNDY0NiAxOC40MjQ5IDExLjM0MUMxOC44NjE1IDExLjExMjEgMTkuMjU1MSAxMC43ODQgMTkuNzM1NyAxMC42NDc2Wk0xOC4xNTY0IDEyLjc5NTZDMTYuMzc1NCAxMy44NTA1IDE0LjU1OTEgMTQuODQ1MyAxMi43ODIgMTUuOTA1QzEyLjc4MzkgMTguNjI5MSAxMi43NzQ0IDIxLjM1NDEgMTIuNzgzIDI0LjA3OTFDMTMuNjI5NSAyMy42Nzc2IDE0LjQxNzcgMjMuMTY0NCAxNS4yMzg0IDIyLjcxMzNDMTUuMjY1MiAyMS4wOTU2IDE1LjIzMzcgMTkuNDc2MSAxNS4yNTA5IDE3Ljg1ODRDMTUuMjQ3IDE3LjQxOTYgMTUuNTgxNCAxNy4wNzgyIDE1Ljk0NTUgMTYuODgyNkMxNy4yODQxIDE2LjEyNzIgMTguNjEyMSAxNS4zNTQ2IDE5LjkzODMgMTQuNTc3M0MxOS45MzczIDEzLjY1ODggMTkuOTQzMSAxMi43NDAyIDE5LjkzMzUgMTEuODIyN0MxOS4zMTUzIDEyLjA5NzQgMTguNzQ2OCAxMi40Njg0IDE4LjE1NjQgMTIuNzk1NlpNMTkuMjY0NyAxNi4yODU2QzE4LjI5OTcgMTYuODQxNiAxNy4zMjEzIDE3LjM3NTggMTYuMzc1NCAxNy45NjQzQzE2LjM4NCAyMC42OTUgMTYuMzY1OSAyMy40MjY3IDE2LjM4MzEgMjYuMTU4NUMxNy4xNTIyIDI1LjczMTEgMTcuOTE2NiAyNS4yOTMzIDE4LjY3NzEgMjQuODUyN0MxOC44NzM5IDI0Ljc2OTcgMTguODUxIDI0LjUyOTMgMTguODYzNCAyNC4zNTM4QzE4Ljg2MDUgMjIuOTgyMyAxOC44NjQ0IDIxLjYxMTYgMTguODU1OCAyMC4yNDAxQzE4Ljg1OTYgMTkuOTcxMSAxOC44NDgxIDE5LjY4MjEgMTguOTkzMyAxOS40NDM2QzE5LjE1NjcgMTkuMTYwMyAxOS40NTQ4IDE5LjAwMDEgMTkuNzI5IDE4Ljg0MThDMjAuOTk1IDE4LjE0MTcgMjIuMjI4NSAxNy4zODQzIDIzLjQ5MTYgMTYuNjc5NUMyMy41MTE2IDE1LjczOSAyMy41MDExIDE0Ljc5OTUgMjMuNDk3MyAxMy44NTkxQzIyLjA3MjcgMTQuNjQ0IDIwLjY3NTkgMTUuNDc3NyAxOS4yNjQ3IDE2LjI4NTZaTTIwLjc0MTggMTkuNTYxOUMyMC40OCAxOS43MjAyIDIwLjE4NTcgMTkuODQxNCAxOS45NzE3IDIwLjA2NTVDMTkuOTI5NyAyMC40NzM3IDE5Ljk2MjIgMjAuODg0OCAxOS45NTU1IDIxLjI5NEMxOS45NjMxIDIzLjU5MzcgMTkuOTM2NCAyNS44OTQyIDE5Ljk2NSAyOC4xOTM5QzIwLjY4NTQgMjcuODc3MiAyMS4zNDA5IDI3LjQzNjYgMjIuMDI3OCAyNy4wNTZDMjMuNzA5NCAyNi4wNjEyIDI1LjQyNTQgMjUuMTI0NSAyNy4wOTg0IDI0LjExNDRDMjcuMDkxNyAyMS4zODk0IDI3LjA5OTMgMTguNjY0NCAyNy4wOTE3IDE1LjkzOTNDMjQuOTUwNSAxNy4xMDMgMjIuODcwNSAxOC4zNzYzIDIwLjc0MTggMTkuNTYxOVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTIgMUgzOFYtMUgyVjFaTTM5IDJWMzhINDFWMkgzOVpNMzggMzlIMlY0MUgzOFYzOVpNMSAzOFYySC0xVjM4SDFaTTIgMzlDMS40NDc3MiAzOSAxIDM4LjU1MjMgMSAzOEgtMUMtMSAzOS42NTY4IDAuMzQzMTQ3IDQxIDIgNDFWMzlaTTM5IDM4QzM5IDM4LjU1MjMgMzguNTUyMyAzOSAzOCAzOVY0MUMzOS42NTY5IDQxIDQxIDM5LjY1NjggNDEgMzhIMzlaTTM4IDFDMzguNTUyMyAxIDM5IDEuNDQ3NzIgMzkgMkg0MUM0MSAwLjM0MzE0NiAzOS42NTY5IC0xIDM4IC0xVjFaTTIgLTFDMC4zNDMxNDYgLTEgLTEgMC4zNDMxNDYgLTEgMkgxQzEgMS40NDc3MiAxLjQ0NzcyIDEgMiAxVi0xWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMjguMzMzMyIgeTE9IjEwLjgzMzMiIHgyPSIxMS42NjY2IiB5Mj0iMjkuMTY2NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQjM0Qzc4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VCODg1MCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=',
  created_at: '2021-05-22T17:11:13.156Z',
  modified_at: '2021-03-22T17:11:13.156Z',
  status: 'verified',
  configuration: [
    {
      name: 'DWOLLA_ACCESS_TOKEN',
      type: 'string',
    },
  ],
  request_parameters: [
    {
      name: 'customer_id',
      description: 'customer_id for the customer within Dwolla',
      type: 'string',
      optional: false,
    },
    {
      name: 'cvc',
      description: 'override cvc',
      type: 'string',
      optional: true,
    },
  ],
  code: `const fetch = require('node-fetch');

const { number, expiration_month, expiration_year, cvc } = context.sourceToken;

const body = new URLSearchParams({
  'card[number]': number,
  'card[exp_month]': expiration_month,
  'card[exp_year]': expiration_year,
  'card[cvc]': cvc,
});

const headers = new Headers();
headers.append('Authorization', 'Basic ' + Buffer.from(context.configuration.STRIPE_API_KEY).toString('base64'));

const stripeToken = await fetch('https://api.strip.com/v1/tokens', {
  method: 'POST',
  headers,
  body,
});`
};

const adyenFormula = {
  id: 'e61ef617-18bb-4b7a-8589-2e955ed1f209',
  name: 'Adyen',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mollis ante, at elementum nisl. Proin ligula est, interdum eget blandit non, lobortis et lectus.',
  source_token_type: 'token',
  tags: ['token', 'adyen', 'transfer'],
  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMkMwIDAuODk1NDMxIDAuODk1NDMxIDAgMiAwSDQ2QzQ3LjEwNDYgMCA0OCAwLjg5NTQzIDQ4IDJWNDZDNDggNDcuMTA0NiA0Ny4xMDQ2IDQ4IDQ2IDQ4SDJDMC44OTU0MzEgNDggMCA0Ny4xMDQ2IDAgNDZWMloiIGZpbGw9IiMwQUJGNTMiLz4KPHBhdGggZD0iTTE2LjUxODMgMTYuMzI3MUMxNi44ODM5IDE2LjIyNzYgMTcuMjY0NyAxNi4yNzc0IDE3LjYzOSAxNi4yNjk4QzIxLjQ5NDEgMTYuMjcwOSAyNS4zNTAzIDE2LjI3MDkgMjkuMjA2NSAxNi4yNjk4QzI5Ljg2OTYgMTYuMjgwNiAzMC41NDk5IDE2LjM5NjMgMzEuMTI3NiAxNi43MzkyQzMyLjA5ODkgMTcuMzA1IDMyLjc1ODcgMTguMzk4NSAzMi43NTAxIDE5LjUyODlDMzIuNzQzNiAyMy45NTQxIDMyLjc1MjMgMjguMzgwMyAzMi43NDU4IDMyLjgwNTVDMjguMzMzNiAzMi44MDMzIDIzLjkyMTQgMzIuODA5OCAxOS41MDkyIDMyLjgwMTJDMTcuODg1NiAzMi44MDQ0IDE2LjM3NjYgMzEuNDU2NiAxNi4yNzcxIDI5LjgyMzNDMTYuMjQ2OCAyOC40ODQyIDE2LjI3MzkgMjcuMTQyOSAxNi4yNjMxIDI1LjgwMjdDMTYuMjE3NiAyNC42NjU4IDE2Ljg0NjEgMjMuNTQzIDE3LjgxNDIgMjIuOTU0NkMxOC41MjU5IDIyLjQ4OTUgMTkuNDAxIDIyLjQyMjQgMjAuMjI4NSAyMi40Mzc2QzIxLjIxNSAyMi40NTgxIDIyLjIwMjYgMjIuNDAyOSAyMy4xODY5IDIyLjQ3MTFDMjMuMTg1OCAyNC4xOTk2IDIzLjE4NTggMjUuOTI4MiAyMy4xODU4IDI3LjY1NjdDMjMuMTU4OCAyOC4xMTk3IDIzLjUyNjYgMjguNjE2MSAyNC4wMTY2IDI4LjU5OTlDMjQuNjQ4MyAyOC42MDc1IDI1LjI4IDI4LjU5NzggMjUuOTEyOCAyOC41OTg4QzI1LjkwNzQgMjYuMTg5OSAyNS45MTI4IDIzLjc3OTkgMjUuOTA5NSAyMS4zNzFDMjUuOTI3OSAyMC44Nzc4IDI1LjQ3MzYgMjAuNDQ0IDI0Ljk4NDcgMjAuNDU5MkMyMi4xNjQ3IDIwLjQzODYgMTkuMzQzNyAyMC40NjEzIDE2LjUyMjcgMjAuNDQ5NEMxNi41MjA1IDE5LjA3NDYgMTYuNTI4MSAxNy43MDA5IDE2LjUxODMgMTYuMzI3MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yIDFINDZWLTFIMlYxWk00NyAyVjQ2SDQ5VjJINDdaTTQ2IDQ3SDJWNDlINDZWNDdaTTEgNDZWMkgtMVY0NkgxWk0yIDQ3QzEuNDQ3NzIgNDcgMSA0Ni41NTIzIDEgNDZILTFDLTEgNDcuNjU2OCAwLjM0MzE0NyA0OSAyIDQ5VjQ3Wk00NyA0NkM0NyA0Ni41NTIzIDQ2LjU1MjMgNDcgNDYgNDdWNDlDNDcuNjU2OSA0OSA0OSA0Ny42NTY4IDQ5IDQ2SDQ3Wk00NiAxQzQ2LjU1MjMgMSA0NyAxLjQ0NzcyIDQ3IDJINDlDNDkgMC4zNDMxNDUgNDcuNjU2OSAtMSA0NiAtMVYxWk0yIC0xQzAuMzQzMTQ2IC0xIC0xIDAuMzQzMTQ2IC0xIDJIMUMxIDEuNDQ3NzIgMS40NDc3MiAxIDIgMVYtMVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=',
  created_at: '2021-05-22T17:11:13.156Z',
  modified_at: '2021-03-22T17:11:13.156Z',
  status: 'coming_soon',
  configuration: [
    {
      name: 'ADYEN_ACCESS_TOKEN',
      type: 'string',
    },
  ],
  request_parameters: [
    {
      name: 'customer_id',
      description: 'customer_id for the customer within Adyen',
      type: 'string',
      optional: false,
    },
    {
      name: 'cvc',
      description: 'override cvc',
      type: 'string',
      optional: true,
    },
  ],
  code: `const fetch = require('node-fetch');

const { number, expiration_month, expiration_year, cvc } = context.sourceToken;

const body = new URLSearchParams({
  'card[number]': number,
  'card[exp_month]': expiration_month,
  'card[exp_year]': expiration_year,
  'card[cvc]': cvc,
});

const headers = new Headers();
headers.append('Authorization', 'Basic ' + Buffer.from(context.configuration.STRIPE_API_KEY).toString('base64'));

const stripeToken = await fetch('https://api.strip.com/v1/tokens', {
  method: 'POST',
  headers,
  body,
});`
};

const noTokenTypeFormula = {
  id: 'e61ef617-18bb-4b7a-8589-2e955ed1f203',
  name: 'Generic Adyen',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mollis ante, at elementum nisl. Proin ligula est, interdum eget blandit non, lobortis et lectus.',
  source_token_type: undefined,
  tags: ['token', 'adyen', 'transfer'],
  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMkMwIDAuODk1NDMxIDAuODk1NDMxIDAgMiAwSDQ2QzQ3LjEwNDYgMCA0OCAwLjg5NTQzIDQ4IDJWNDZDNDggNDcuMTA0NiA0Ny4xMDQ2IDQ4IDQ2IDQ4SDJDMC44OTU0MzEgNDggMCA0Ny4xMDQ2IDAgNDZWMloiIGZpbGw9IiMwQUJGNTMiLz4KPHBhdGggZD0iTTE2LjUxODMgMTYuMzI3MUMxNi44ODM5IDE2LjIyNzYgMTcuMjY0NyAxNi4yNzc0IDE3LjYzOSAxNi4yNjk4QzIxLjQ5NDEgMTYuMjcwOSAyNS4zNTAzIDE2LjI3MDkgMjkuMjA2NSAxNi4yNjk4QzI5Ljg2OTYgMTYuMjgwNiAzMC41NDk5IDE2LjM5NjMgMzEuMTI3NiAxNi43MzkyQzMyLjA5ODkgMTcuMzA1IDMyLjc1ODcgMTguMzk4NSAzMi43NTAxIDE5LjUyODlDMzIuNzQzNiAyMy45NTQxIDMyLjc1MjMgMjguMzgwMyAzMi43NDU4IDMyLjgwNTVDMjguMzMzNiAzMi44MDMzIDIzLjkyMTQgMzIuODA5OCAxOS41MDkyIDMyLjgwMTJDMTcuODg1NiAzMi44MDQ0IDE2LjM3NjYgMzEuNDU2NiAxNi4yNzcxIDI5LjgyMzNDMTYuMjQ2OCAyOC40ODQyIDE2LjI3MzkgMjcuMTQyOSAxNi4yNjMxIDI1LjgwMjdDMTYuMjE3NiAyNC42NjU4IDE2Ljg0NjEgMjMuNTQzIDE3LjgxNDIgMjIuOTU0NkMxOC41MjU5IDIyLjQ4OTUgMTkuNDAxIDIyLjQyMjQgMjAuMjI4NSAyMi40Mzc2QzIxLjIxNSAyMi40NTgxIDIyLjIwMjYgMjIuNDAyOSAyMy4xODY5IDIyLjQ3MTFDMjMuMTg1OCAyNC4xOTk2IDIzLjE4NTggMjUuOTI4MiAyMy4xODU4IDI3LjY1NjdDMjMuMTU4OCAyOC4xMTk3IDIzLjUyNjYgMjguNjE2MSAyNC4wMTY2IDI4LjU5OTlDMjQuNjQ4MyAyOC42MDc1IDI1LjI4IDI4LjU5NzggMjUuOTEyOCAyOC41OTg4QzI1LjkwNzQgMjYuMTg5OSAyNS45MTI4IDIzLjc3OTkgMjUuOTA5NSAyMS4zNzFDMjUuOTI3OSAyMC44Nzc4IDI1LjQ3MzYgMjAuNDQ0IDI0Ljk4NDcgMjAuNDU5MkMyMi4xNjQ3IDIwLjQzODYgMTkuMzQzNyAyMC40NjEzIDE2LjUyMjcgMjAuNDQ5NEMxNi41MjA1IDE5LjA3NDYgMTYuNTI4MSAxNy43MDA5IDE2LjUxODMgMTYuMzI3MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yIDFINDZWLTFIMlYxWk00NyAyVjQ2SDQ5VjJINDdaTTQ2IDQ3SDJWNDlINDZWNDdaTTEgNDZWMkgtMVY0NkgxWk0yIDQ3QzEuNDQ3NzIgNDcgMSA0Ni41NTIzIDEgNDZILTFDLTEgNDcuNjU2OCAwLjM0MzE0NyA0OSAyIDQ5VjQ3Wk00NyA0NkM0NyA0Ni41NTIzIDQ2LjU1MjMgNDcgNDYgNDdWNDlDNDcuNjU2OSA0OSA0OSA0Ny42NTY4IDQ5IDQ2SDQ3Wk00NiAxQzQ2LjU1MjMgMSA0NyAxLjQ0NzcyIDQ3IDJINDlDNDkgMC4zNDMxNDUgNDcuNjU2OSAtMSA0NiAtMVYxWk0yIC0xQzAuMzQzMTQ2IC0xIC0xIDAuMzQzMTQ2IC0xIDJIMUMxIDEuNDQ3NzIgMS40NDc3MiAxIDIgMVYtMVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=',
  created_at: '2021-05-22T17:11:13.156Z',
  modified_at: '2021-03-22T17:11:13.156Z',
  status: 'verified',
  configuration: [
    {
      name: 'ADYEN_ACCESS_TOKEN',
      type: 'string',
    },
  ],
  request_parameters: [
    {
      name: 'customer_id',
      description: 'customer_id for the customer within Adyen',
      type: 'string',
      optional: false,
    },
    {
      name: 'cvc',
      description: 'override cvc',
      type: 'string',
      optional: true,
    },
  ],
  code: `const fetch = require('node-fetch');

const { number, expiration_month, expiration_year, cvc } = context.sourceToken;

const body = new URLSearchParams({
  'card[number]': number,
  'card[exp_month]': expiration_month,
  'card[exp_year]': expiration_year,
  'card[cvc]': cvc,
});

const headers = new Headers();
headers.append('Authorization', 'Basic ' + Buffer.from(context.configuration.STRIPE_API_KEY).toString('base64'));

const stripeToken = await fetch('https://api.strip.com/v1/tokens', {
  method: 'POST',
  headers,
  body,
});`
};

const data = [
  stripeFormula,
  dwollaFormula,
  adyenFormula,
  noTokenTypeFormula
];

export const getData = () => data;
export { stripeFormula, dwollaFormula, adyenFormula, noTokenTypeFormula };
