interface WithId {
  id: number;
}

export const getUniqueId = <T extends WithId>(arr: T[]) => {
	const ids = arr.map(el => el.id);
	ids.sort();
	let newId;
	if (ids.length > 0) {
		const lastId = ids[ids.length - 1] as number;
		newId = lastId + 1;
	} else {
		newId = 1;
	}
	return newId;
}