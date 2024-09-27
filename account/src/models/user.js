import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  rua: { type: String, required: true },
  numero: { type: Number, required: true },
  complemento: { type: String },
  bairro: { type: String, required: true },
  cep: { type: String, required: true },
  cidade: { type: String, required: true },
  uf: { type: String, required: true },
});

const userSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    criadoEm: { type: Date },
    cpf: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: [addressSchema], required: true },
  }
);

const userModel = mongoose.model('users', userSchema);

export default userModel;