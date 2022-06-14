/*
433. 最小基因变化

基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 'A'、'C'、'G' 和 'T' 之一。

假设我们需要调查从基因序列 start 变为 end 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。

例如，"AACCGGTT" --> "AACCGGTA" 就是一次基因变化。
另有一个基因库 bank 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。

给你两个基因序列 start 和 end ，以及一个基因库 bank ，请你找出并返回能够使 start 变化为 end 所需的最少变化次数。如果无法完成此基因变化，返回 -1 。

注意：起始基因序列 start 默认是有效的，但是它并不一定会出现在基因库中。
*/

/*


输入：start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]

AA AAA CCC
       e
AA CCC CCC
   i   e
*/

export function minMutation(start: string, end: string, bank: string[]) {
  const m = start.length;
  const n = bank.length;
  const adj = new Array(n).fill(0).map(() => new Array());
  let endIndex = -1;
  for (let i = 0; i < n; i++) {
    if (end === bank[i]) {
      endIndex = i;
    }
    for (let j = i + 1; j < n; j++) {
      let mutations = 0;
      for (let k = 0; k < m; k++) {
        if (bank[i][k] !== bank[j][k]) {
          mutations++;
        }
        if (mutations > 1) {
          break;
        }
      }
      if (mutations === 1) {
        adj[i].push(j);
        adj[j].push(i);
      }
    }
  }
  if (endIndex === -1) {
    return -1;
  }

  const queue = [];
  const visited = new Array(n).fill(0);
  let step = 1;
  for (let i = 0; i < n; i++) {
    let mutations = 0;
    for (let k = 0; k < m; k++) {
      if (start[k] != bank[i][k]) {
        mutations++;
      }
      if (mutations > 1) {
        break;
      }
    }
    if (mutations == 1) {
      queue.push(i);
      visited[i] = true;
    }
  }
  while (queue.length) {
    const sz = queue.length;
    for (let i = 0; i < sz; i++) {
      const curr = queue.shift();
      if (curr === endIndex) {
        return step;
      }
      for (const next of adj[curr]) {
        if (visited[next]) {
          continue;
        }
        visited[next] = true;
        queue.push(next);
      }
    }
    step++;
  }
  return -1;
}

function minMutation1(start: string, end: string, bank: string[]): number {
  let count = 0;
  const bankMap: Record<string, boolean> = {};
  bank.forEach((v) => (bankMap[v] = true));

  const sLen = start.length;
  let index = 0;
  let eIndex = sLen - 1;
  let gene = start;

  // 左侧
  while (index < sLen) {
    const s = start[index];
    const e = end[index];

    if (s !== e) {
      break;
    }
    index++;
  }

  // 右侧
  while (eIndex > index) {
    const s = start[eIndex];
    const e = end[eIndex];
    if (s !== e) {
      break;
    }
    eIndex--;
  }

  let i = index;
  while (i <= eIndex) {
    const eStr = end[i];
    const newGene = start.slice(0, i) + eStr + start.slice(i + 1);
    if (bankMap[newGene]) {
      count++;
      gene = newGene;
      if (i === index) {
        index++;
      }
      if (i === eIndex) {
        eIndex--;
      }
    }
    i++;
  }

  i = eIndex;
  while (i >= index) {
    const eStr = end[i];
    const newGene = gene.slice(0, i) + eStr + gene.slice(i + 1);

    if (bankMap[newGene]) {
      count++;
      gene = newGene;
    }
    i--;
  }

  return count;
}
