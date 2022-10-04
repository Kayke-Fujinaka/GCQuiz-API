import * as bcrypt from 'bcrypt';

export class BcryptProvider {
  async genHash(data: string): Promise<string> {
    return bcrypt.hash(data, await bcrypt.genSalt());
  }

  async compareHash(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
