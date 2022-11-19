import * as borsh from '@project-serum/borsh'

export class StudentIntro {
    name: string;
    message: string;

    constructor(name: string, message: string) {
        this.name = name;
        this.message = message;
    }

    static mocks: StudentIntro[] = [
        new StudentIntro('DEVESH SHARMA', `Rs 105000`),
        new StudentIntro('Lord Ayush', `Rs 600`),
        new StudentIntro('Vansh', `Rs 1100 `),
        new StudentIntro('Ashish', `Rs 9990 `),
        new StudentIntro('Furquan bhAI', `Rs 100000 `),
    ]

    borshInstructionSchema = borsh.struct([
        borsh.u8('variant'),
        borsh.str('name'),
        borsh.str('message'),
    ])

    static borshAccountSchema = borsh.struct([
        borsh.bool('initialized'),
        borsh.str('name'),
        borsh.str('message'),
    ])

    serialize(): Buffer {
        const buffer = Buffer.alloc(1000)
        this.borshInstructionSchema.encode({ ...this, variant: 0 }, buffer)
        return buffer.slice(0, this.borshInstructionSchema.getSpan(buffer))
    }

    static deserialize(buffer?: Buffer): StudentIntro|null {
        if (!buffer) {
            return null
        }

        try {
            const { name, message } = this.borshAccountSchema.decode(buffer)
            return new StudentIntro(name, message)
        } catch(e) {
            console.log('Deserialization error:', e)
            return null
        }
    }
}