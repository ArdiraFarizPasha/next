import styled from "styled-components"

export const NavbarWrapper = styled.div`
  min-height: 3rem;
  width: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  display: flex;
  justify-content: space-between;
`

export const JadwalSesiButton = styled.button`
  padding: 12px;
  text-align: center;
  background: #225ACF;
  border-radius: 8px;
  color: white;
  margin: 0rem 1rem;
`

export const NavbarMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavbarMenuSingleWrapper = styled.a`
  margin: 0rem 1rem;
`