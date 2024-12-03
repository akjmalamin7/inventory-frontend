import { Container } from "@/components/comon/container"
import PageHeader from "@/components/comon/pageHeader"
import { CustomerForm } from "@/components/pages/customer"
import { Card } from "@/shared/ui/card"

const NewCustomer = () => {
  return (
    <Container size="md">
      <PageHeader pageTitle="Add New Customer" />
      <Card>
        <Card.Body padding="lg">
          <CustomerForm/>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default NewCustomer