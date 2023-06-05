import React, { FormEvent, useEffect, useState } from "react";
import { PropsToken } from "../../../interfaces/Login";
import {
  createUsuario,
  deleteUsuario,
  getUsuario,
  getUsuarios,
  patchUsuario,
} from "../../../services/Usuario";
import "./Usuario.css";
import { Usuario } from "../../../interfaces/Usuario";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Pagination } from "react-bootstrap";

export function Usuarios({ token }: PropsToken) {
  // Lidando com os usuários da lista
  const [usuarios, setUsuarios] = useState<Array<Usuario>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getUsers = async () => {
    const data = await getUsuarios(token);
    setUsuarios(data);
    // setCurrentPage(data.length);
  };

  useEffect(() => {
    getUsers().catch(console.error);
  }, []);

  const usuarioEmpty = {
    id: "",
    username: "",
    password: "",
    email: "",
  };

  // Lidando com as mudanças da Modal de Cadastrar
  const [data, setData] = useState<Usuario>(usuarioEmpty);

  // Lidando com abertura e fechamento da modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setData(usuarioEmpty);
  };

  const handleShow = () => {
    setShow(true);
    setData(usuarioEmpty);
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name) {
      setData({ ...data, [name]: value });
    }
  };

  // Salvar usuario

  const handleSave = () => {
    if (data) {
      const response = async () => {
        if (data.id) await patchUsuario(data, token);
        else await createUsuario(data, token);
      };
      response().catch(console.error);
    }
    setShow(false);
    getUsers().catch(console.error);
  };

  // Modal Editar

  const handleEditar = (id: string | undefined) => () => {
    if (id) {
      const data = async () => {
        const data = await getUsuario(id, token);
        setData(data);
      };
      data().catch(console.error);
    }
    setShow(true);
  };

  // Deletar

  const handleDeletar = (id: string | undefined) => () => {
    const confirm = window.confirm("Você deseja deletar o usuário?");
    if (id && confirm) {
      const data = async () => {
        await deleteUsuario(id, token);
      };
      data().catch(console.error);
    }
    setShow(false);
    getUsers().catch(console.error);
  };

  return (
    <div>
      <div className="py-4 text-center">
        <h2>Cadastro de Usuários</h2>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Usuário</th>
            <th scope="col">Email</th>
            <th scope="col">Senha</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {usuarios ? (
            usuarios.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.username}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="me-2"
                      onClick={handleEditar(val.id)}
                    >
                      Editar
                    </Button>
                    <Button variant="danger" onClick={handleDeletar(val.id)}>
                      Deletar
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>Nenhum usuário encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        Cadastrar
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Usuário"
                name="username"
                value={data.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="text"
                placeholder="Usuário"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
