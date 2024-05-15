import connection from './knex.ts'
import { ConnectionDB } from '../../models/count.ts';

const db = connection

async function getFourSets(): Promise<ConnectionDB[]> {
    const connectionCount = await db('connections').count('id as count').first() as Dict<string | number>
    const connectionSet : Set<number> = new Set()
    while (connectionSet.size < 4){
        connectionSet.add(Math.floor(Math.random() * connectionCount.count + 1))
    }
    const connectionArr = [...connectionSet]
    return await db('connections').select().whereIn('id', connectionArr).orderByRaw('RANDOM()');
}

export async function getSetWords(): Promise<unknown> {
    const chosenSets = await getFourSets()
    const setIds = chosenSets.map(item => item.id)
    const result = db('words').join('connections', 'connections.id', 'words.connection_id').select('words.name', 'connections.name as desc').whereIn('connection_id', setIds)
    return result
}