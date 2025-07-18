// export const CONTRACT_VIEW = {
//     list: (page: number) => ['contractList', { page }] as const,
//     detailed: (id: number | null) => ['contract', { id }] as const,
//   };

export const ROOM = {
  all: ['rooms_all'] as const,
  map: ['rooms_map'] as const,
  detail: (roomId: number | string) => ['room_detail', roomId] as const,
}
